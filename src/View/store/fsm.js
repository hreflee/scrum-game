import StateMachine from 'javascript-state-machine';

import Game from '../../Game';
import TaskMgr from '../../TaskMgr';

import { OverallStoryStatus } from '../../TaskMgr';
import { CardType } from '../../Game';

import store from './index';

let projectId;

const GS = {
  INIT: 'INIT',
  ENT_MEMBER: 'ENT_MEMBER',
  ENT_PRJ_CFG: 'ENT_PRJ_CFG',
  SPRINT_START: 'SPRINT_START',
  SEL_TODO: 'SEL_TODO',
  DAY_START: 'DAY_START',
  BEFORE_PICK_STORY: 'BEFORE_PICK_STORY',
  PICK_STORY: 'PICK_STORY',
  NO_STORY: 'NO_STORY',
  DICE_AND_DRAW: 'DICE_AND_DRAW',
  UNBLOCK_STORY: 'UNBLOCK_STORY',
  USER_DONE: 'USER_DONE',
  SPRINT_SUM: 'SPRINT_SUM',
  GAME_END: 'GAME_END',
};

const GSTrans = {
  CLICK_START_GAME: 'clickStartGame',
  ENTER_MEMBER_INFO: 'enterMemberInfo',
  ENTER_PRJ_CONFIG: 'enterPrjConfig',
  SET_NEXT_SPRINT: 'setNextSprint',
  SAVE_TODO: 'saveTodo',
  SET_NEXT_DAY: 'setNextDay',
  GET_STORY_STATUS: 'getStoryStatus',
  PICK_STORY: 'pickStory',
  GOT_REASON: 'gotReason',
  GOT_RESULT: 'gotResult',
  SELECT_UNBLOCK: 'selectUnblock',
  SET_NEXT_MEMBER: 'setNextMember',
  SPRINT_SUM_DONE: 'sprintSumDone',
};

const GSTransConfig = {
  CLICK_START_GAME: {
    from: GS.INIT,
    to: GS.ENT_MEMBER,
  },
  ENTER_MEMBER_INFO: {
    from: GS.ENT_MEMBER,
    to: GS.ENT_PRJ_CFG,
    onBefore(memberList) {
      TaskMgr.createGroup(memberList);
      store.commit('setMemberList', memberList);
    },
  },
  ENTER_PRJ_CONFIG: {
    from: GS.ENT_PRJ_CFG,
    to: GS.SPRINT_START,
    onBefore(projectConfig) {
      store.commit('updateProjectId', TaskMgr.createProject(projectConfig));
      setTimeout(() => {
        Game.init(projectId);
      });
    },
  },
  SET_NEXT_SPRINT: {
    autoFire: true,
    from: GS.SPRINT_START,
    to() {
      const { success: hasNextSprint } = TaskMgr.setToNextSprint(projectId);
      if (hasNextSprint) {
        store.commit('setToNextSprint');
        return GS.SEL_TODO;
      }
      return GS.GAME_END;
    },
  },
  SAVE_TODO: {
    from: GS.SEL_TODO,
    to: GS.DAY_START,
    onBefore(todoList) {
      TaskMgr.saveTodo(projectId, todoList);
    },
  },
  SET_NEXT_DAY: {
    autoFire: true,
    from: GS.DAY_START,
    to() {
      if (TaskMgr.setToNextDay(projectId)) {
        store.commit('updateDashboard');
        store.commit('setToNextDay');
        return GS.BEFORE_PICK_STORY;
      }
      store.commit('setToFirstMember');
      return GS.SPRINT_SUM;
    },
  },
  GET_STORY_STATUS: {
    autoFire: true,
    from: GS.BEFORE_PICK_STORY,
    to() {
      const overallStoryStatus = TaskMgr.getOverallStoryStatus(projectId);
      if (overallStoryStatus !== OverallStoryStatus.COMMON) {
        store.commit('updateNoStoryReason', overallStoryStatus);
        return GS.NO_STORY;
      }
      return GS.PICK_STORY;
    },
  },
  PICK_STORY: {
    from: GS.PICK_STORY,
    to: GS.DICE_AND_DRAW,
    onBefore(storyItem) {
      const diceAndDrawResult = Game.diceAndDrawCard(projectId, storyItem);
      store.commit('updateDiceAndDrawResult', diceAndDrawResult);
    },
  },
  GOT_REASON: {
    from: GS.NO_STORY,
    to() {
      const reason = store.state.gameStatus.noStoryReason;
      setTimeout(() => {
        store.commit('updateNoStoryReason', OverallStoryStatus.COMMON);
      });
      if (reason === OverallStoryStatus.ALL_DONE) {
        return GS.SPRINT_SUM;
      }
      const diceAndDrawResult = Game.diceAndDrawCard(projectId);
      store.commit('updateDiceAndDrawResult', diceAndDrawResult);
      return GS.DICE_AND_DRAW;
    },
  },
  GOT_RESULT: {
    from: GS.DICE_AND_DRAW,
    to() {
      const isSolutionCard = store.state.diceAndDrawResult.card.type === CardType.SOLUTION;
      store.commit('updateDashboard');
      if (isSolutionCard) {
        const hasBlockedStory = TaskMgr.getBlockedStories(projectId).length;
        return hasBlockedStory ? GS.UNBLOCK_STORY : GS.USER_DONE;
      }
      return GS.USER_DONE;
    },
  },
  SELECT_UNBLOCK: {
    from: GS.UNBLOCK_STORY,
    to: GS.USER_DONE,
    onBefore(storyToUnblock) {
      Game.useCard(projectId, store.state.diceAndDrawResult.card, storyToUnblock);
      store.commit('updateDashboard');
    },
  },
  SET_NEXT_MEMBER: {
    from: GS.USER_DONE,
    to() {
      if (store.getters.currentFinalMember) {
        return GS.DAY_START;
      }
      store.commit('setToNextMember');
      return GS.BEFORE_PICK_STORY;
    },
  },
  SPRINT_SUM_DONE: {
    from: GS.SPRINT_SUM,
    to: GS.SPRINT_START,
  },
};

const fsm = new StateMachine({
  init: GS.INIT,
  transitions: Object.keys(GSTrans).map(transKey => ({
    name: GSTrans[transKey],
    from: GSTransConfig[transKey].from,
    to() {
      const { onBefore, to } = GSTransConfig[transKey];
      if (onBefore) {
        onBefore(...arguments);
      }
      if (typeof to === 'function') {
        return to(...arguments);
      }
      return to;
    },
  })),
});

store.commit('updateGlobalState', GS.INIT);

const autoTransState2Trans = Object.keys(GSTransConfig).map((transKey) => {
  if (GSTransConfig[transKey].autoFire) {
    return {
      state: GSTransConfig[transKey].from,
      trans: GSTrans[transKey],
    };
  }
  return null;
})
  .filter(item => item)
  .reduce((reducer, item) => ({ ...reducer, [item.state]: item.trans }), {});

fsm.observe('onAfterTransition', (lifecycle, arg) => {
  console.log(lifecycle, arg);
  store.commit('updateGlobalState', lifecycle.to);
  setTimeout(() => {
    const autoTrans = autoTransState2Trans[lifecycle.to];
    if (autoTrans) {
      fsm[autoTrans]();
    }
  });
});

store.watch(() => store.state.projectId, (newProjectId) => {
  projectId = newProjectId;
});

if (process && process.env.NODE_ENV === 'development') {
  let waitCount = 0;
  const wait = f => setTimeout(f, (++waitCount) * 1000);
  window.fsm = fsm;
  window.doSaveTodo = () => {
    const { backlog } = TaskMgr.getDashboard(projectId).taskBoard;
    fsm[GSTrans.SAVE_TODO](backlog.filter(() => Math.random() > 9));
  };
  window.doGotResult = () => {
    fsm[GSTrans.GOT_RESULT]();
  };
  // fsm[GSTrans.CLICK_START_GAME]();
  // fsm[GSTrans.ENTER_MEMBER_INFO]([
  //   { id: 0, name: 'Mary', avatar: '' },
  //   { id: 1, name: 'James', avatar: '' },
  //   { id: 2, name: 'John', avatar: '' },
  // ]);
  // fsm[GSTrans.ENTER_PRJ_CONFIG]({
  //   numOfSprint: 3,
  //   numOfDayPreSprint: 30,
  // });
  // wait(() => {
  //   window.doSaveTodo();
  // });
  // wait(() => {
  //   const { todo } = TaskMgr.getDashboard(projectId).taskBoard;
  //   fsm[GSTrans.PICK_STORY](todo[0]);
  // });
  // wait(() => {
  //   window.doGotResult();
  // });
}

export {
  GS,
  GSTrans,
  fsm,
};

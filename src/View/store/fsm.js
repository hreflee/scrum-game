import StateMachine from 'javascript-state-machine';

import Game from '../../Game';
import TaskMgr from '../../TaskMgr';

import store from './index';

let projectId;

const GS = {
  INIT: 'INIT',
  ENT_MEMBER: 'ENT_MEMBER',
  ENT_PRJ_CFG: 'ENT_PRJ_CFG',
  SPRINT_START: 'SPRINT_START',
  SEL_TODO: 'SEL_TODO',
  SPRINT_INIT_DONE: 'SPRINT_INIT_DONE',
  PICK_STORY: 'PICK_STORY',
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
  PICK_STORY: 'pickStory',
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
      return hasNextSprint ? GS.SEL_TODO : GS.GAME_END;
    },
  },
  SAVE_TODO: {
    from: GS.SEL_TODO,
    to: GS.SPRINT_INIT_DONE,
    onBefore(todoList) {
      TaskMgr.saveTodo(projectId, todoList);
    },
  },
  SET_NEXT_DAY: {
    autoFire: true,
    from: GS.SPRINT_INIT_DONE,
    to() {
      const hasNextDay = TaskMgr.setToNextDay(projectId);
      return hasNextDay ? GS.PICK_STORY : GS.SPRINT_SUM;
    },
  },
  PICK_STORY: {
    from: GS.PICK_STORY,
    to: GS.DICE_AND_DRAW,
    onBefore(storyItem) {
      const diceAndDrawResult = Game.diceAndDrawCard(projectId, storyItem);
      store.commit('diceAndDrawResult', diceAndDrawResult);
    },
  },
  GOT_RESULT: {
    from: GS.DICE_AND_DRAW,
    to(isProblemCard) {
      store.commit('updateDashboard');
      if (isProblemCard) {
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
    },
  },
  SET_NEXT_MEMBER: {
    from: GS.USER_DONE,
    to() {
      const doesAllMemberWork = store.getters.currentFinalMember;
      return doesAllMemberWork ? GS.SPRINT_INIT_DONE : GS.PICK_STORY;
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

const autoTransState2Trans = Object.keys(GSTransConfig).map(transKey => {
  if (GSTransConfig[transKey].autoFire) {
    return {
      state: GSTransConfig[transKey].from,
      trans: GSTrans[transKey],
    };
  }
  return null;
})
  .filter(item => item)
  .reduce((reducer, item) => ({...reducer, [item.state]: item.trans}), {});

fsm.observe('onAfterTransition', (lifecycle) => {
  console.log(lifecycle);
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

export {
  GS,
  GSTrans,
  fsm,
};

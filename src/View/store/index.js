import Vue from 'vue';
import Vuex from 'vuex';

import TaskMgr from '../../TaskMgr';

import member from './modules/member';
import gameStatus from './modules/game-status';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    globalState: '',

    projectId: 0,

    diceAndDrawResult: {},

    taskBoard: {
      backlog: [],
      todo: [],
      processing: [],
      done: [],
    },
    remainTimeForEachDay: [],
  },
  mutations: {
    updateGlobalState(state, newGlobalState) {
      state.globalState = newGlobalState;
    },
    updateProjectId(state, newProjectId) {
      state.projectId = newProjectId;
    },
    updateDiceAndDrawResult(state, newResult) {
      state.diceAndDrawResult = newResult;
    },
    updateDashboard(state) {
      const { taskBoard, remainTimeForEachDay } = TaskMgr.getDashboard(state.projectId);
      state.taskBoard = taskBoard;
      state.remainTimeForEachDay = remainTimeForEachDay;
    },
  },
  modules: {
    member,
    gameStatus,
  },
});

export default store;

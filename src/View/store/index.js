import Vue from 'vue';
import Vuex from 'vuex';

import TaskMgr from '../../TaskMgr';

import member from './modules/member';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    globalState: '',

    projectId: 0,

    diceAndDrawResult: {},

    taskBoard: [],
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
  },
});

export default store;

export default {
  state: {
    currentSprint: 0,
    currentDay: 0,
    noStoryReason: 0,
  },
  mutations: {
    setToNextDay(state) {
      state.currentDay++;
    },
    setToNextSprint(state) {
      state.currentDay = 0;
      state.currentSprint++;
    },
    updateNoStoryReason(state, payload) {
      state.noStoryReason = payload;
    },
  },
};

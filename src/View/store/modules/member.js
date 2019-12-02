export default {
  state: {
    members: [],
    currentMemberIndex: 0,
  },
  getters: {
    currentMember(state) {
      return state.members[state.currentMemberIndex] || {};
    },
    currentFinalMember(state) {
      return state.currentMemberIndex === state.members.length - 1;
    },
  },
  mutations: {
    setMemberList(state, memberList) {
      state.members = memberList;
    },
    setToNextMember(state) {
      state.currentMemberIndex++;
    },
    setToFirstMember(state) {
      state.currentMemberIndex = 0;
    },
  },
};

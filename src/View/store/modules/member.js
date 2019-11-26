export default {
  // namespace: true,
  state: {
    members: [],
    currentMemberIndex: 0,
  },
  getters: {
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
  },
};

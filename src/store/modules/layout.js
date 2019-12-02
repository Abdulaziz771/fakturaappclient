const state = {
  sidebarOpen: true
};

const getters = {
  isSidebarOpen(state) {
    return state.sidebarOpen;
  }
};

export default {
  namespaced: true,
  state,
  getters
}

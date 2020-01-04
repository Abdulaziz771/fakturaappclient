export default {
  state: {
    wholeMenuToggleButtonSidebar: true,
    secondMenuValue: false,
    currentSidebar: null,
    allNavigators: true
  },

  getters: {
    iswholeMenuToggleButtonSidebar(state) {
      return state.wholeMenuToggleButtonSidebar
    },
    isvalueSecondSidebar(state) {
      return state.secondMenuValue
    },
    currentValueSidebar(state) {
      return state.currentSidebar
    },
    isnavigatorsVisivle(state) {
      return state.allNavigators
    },
  },

  mutations: {
    setWholeMenuInSidebar(state, value) {
      state.wholeMenuToggleButtonSidebar = value;
    },
    toggleAllNavigators(state, value) {
      state.allNavigators = value;
    },
    toggleSecondSidebar(state, value) {
      state.secondMenuValue = value;
    },
    openCurrentSidebar(state, value) {
      state.currentSidebar = value;
    },
    toggleSidebar(state) {
      state.secondMenuValue = !state.secondMenuValue;
    },
  },
}

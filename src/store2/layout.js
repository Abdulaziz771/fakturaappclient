export default  {
  state: {
    showMenuToggleButtonInHeader: false,
    menuToggleButtonInHeaderOpen: false,
    wholeMenuToggleButtonSidebar: true,
    mainPageOpen: true
  },
  mutations: {
    setWholeMenuInSidebar(state, {value}) {
      state.wholeMenuToggleButtonSidebar = value;
    },

    setShowToggleMenuButtonInHeader(state, {value}) {
      state.showMenuToggleButtonInHeader = value;
    },

    setToggleMenuButtonInHeaderOpenState(state, {value}) {
      state.menuToggleButtonInHeaderOpen = value;
    },

    toggleMainPage(state, {value}) {
      state.mainPageOpen = value;
    }
  },
  actions: {
    showMainPage(context) {
      context.commit('toggleMainPage', {value: true});
    },

    hideMainPage(context) {
      context.commit('toggleMainPage', {value: false});
    },

    showsetWholeMenuInSidebar(context) {
      context.commit('setWholeMenuInSidebar', {value: true});
    },

    hidesetWholeMenuInSidebar(context) {
      context.commit('setWholeMenuInSidebar', {value: false});
    },

    showToggleMenuButtonInHeader(context) {
      context.commit('setShowToggleMenuButtonInHeader', {value: true});
    },

    hideToggleMenuButtonInHeader(context) {
      context.commit('setShowToggleMenuButtonInHeader', {value: false});
    },

    openToggleMenuButtonInHeader(context) {
      context.commit('setToggleMenuButtonInHeaderOpenState', {value: true});
    },

    closeToggleMenuButtonInHeader(context) {
      context.commit('setToggleMenuButtonInHeaderOpenState', {value: false});
    }
  },
  getters: {
    ismainPageOpen(state) {
      return state.mainPageOpen
    },

    iswholeMenuToggleButtonSidebar(state) {
      return state.wholeMenuToggleButtonSidebar
    },

    isToggleMenuButtonInHeaderShow(state) {
      return state.showMenuToggleButtonInHeader;
    },

    isToggleMenuButtonInHeaderOpen(state){
      return state.menuToggleButtonInHeaderOpen;
    }
  }
}

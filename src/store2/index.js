import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import sidebar from './modules/sidebar'

export default new Vuex.Store({
  modules: {
    sidebar
  }
})

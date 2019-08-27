import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "@/styles/global.scss"
import VueProgressBar from 'vue-progressbar';

import Multiselect from 'vue-multiselect'
Vue.component('multiselect', Multiselect)
import "vue-multiselect/dist/vue-multiselect.min.css"


Vue.use(VueProgressBar, {
  color: '#28a745',
  failedColor: 'red',
  height: '2px'
})

Vue.use(BootstrapVue)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

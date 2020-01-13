import Vue from 'vue'
import App from './App.vue'

import vSelect from 'vue-select'

import router from './router'
import store from './store2'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueProgressBar from 'vue-progressbar';

import Vuelidate from 'vuelidate'
import VueSlideoutPanel from 'vue-slideout-panel';

Vue.use(Vuelidate, VueSlideoutPanel);

Vue.component('v-select', vSelect);

import Multiselect from 'vue-multiselect'
Vue.component('multiselect', Multiselect);
import "vue-multiselect/dist/vue-multiselect.min.css"

import "@/styles/global.scss"
import "@/styles/media.scss"

Vue.use(VueProgressBar, {
  color: '#28a745',
  failedColor: 'red',
  height: '2px'
});

Vue.use(BootstrapVue);
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

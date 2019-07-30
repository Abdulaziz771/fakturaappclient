import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import InboxDocuments from '../src/components/document/InboxDocuments';
//import Systeminvoice from '../src/components/document/create/Systeminvoice';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/document/inbox',
      name: 'InboxDocuments',
      component: InboxDocuments
    },
    {
      path: '/document/create',
      name: 'create-document-view',
      component: () => import('./views/document/CreateDocumentView')
    },
    {
      path: '/document/create/systeminvoice',
      name: 'create-system-invoice',
      component: () => import('./components/document/create/Systeminvoice')
    },
  ]
})

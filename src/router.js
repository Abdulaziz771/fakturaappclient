import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home')
    },
    {
      path: '/document/inbox',
      name: 'InboxDocuments',
      component: () => import('./components/document/InboxDocuments')
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
    {
      path: '/settings/personalarea',
      name: 'settings-personal-area',
      component: () => import('./views/Settings/PersonalAreaSettingsView')
    }
  ]
})

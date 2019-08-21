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
      component: () => import('./views/document/InboxDocumentsView')
    },
    {
      path: '/document/create',
      name: 'create-document-view',
      component: () => import('./views/document/CreateDocumentView')
    },
    {
      path: '/document/create/systeminvoice',
      name: 'create-system-invoice',
      component: () => import('./views/document/create/SystemInvoiceView')
    },
    {
      path: '/document/verify',
      name: 'verify-document-view',
      component: () => import('./views/document/VerifyDocumentView')
    },
    {
      path: '/settings/personalarea',
      name: 'settings-personal-area',
      component: () => import('./views/Settings/PersonalAreaSettingsView')
    },
    {
      path: '/counterparties',
      name: 'counter-parties',
      component: () => import('./views/counterparties/Counterparties')
    },
    {
      path: '/finance/index',
      name: 'index',
      component: () => import('./views/Finance/Index')
    },
    {
      path: '/finance/deposit',
      name: 'deposit',
      component: () => import('./views/Finance/Deposit')
    },
    {
      path: '/myorganization',
      name: 'my-organization-list',
      component: () => import('./views/Myorganization')
    }
  ]
})

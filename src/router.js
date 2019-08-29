import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home')
    },
    {
      path: '/document/inbox',
      name: 'inbox-documents',
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
      path: '/document/create/systemusdinvoice',
      name: 'system-usdin-voice',
      component: () => import('./views/document/create/Systemusdinvoice')
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
      name: 'finance-index',
      component: () => import('./views/Finance/Index')
    },
    {
      path: '/finance/deposit',
      name: 'finance-deposit',
      component: () => import('./views/Finance/Deposit')
    },
    {
      path: '/myorganization',
      name: 'my-organization-list',
      component: () => import('./views/Myorganization')
    }
  ]
})

/*router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public)
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
  const loggedIn = !!TokenService.getToken()

  if (!isPublic && !loggedIn) {
    return next({
      path: '/login',
      query: { redirect: to.fullPath }  // Store the full path to redirect the user to after login
    })
  }

  // Do not allow user to visit login page or register page if they are logged in
  if (loggedIn && onlyWhenLoggedOut) {
    return next('/')
  }

  next()
})*/

export default router

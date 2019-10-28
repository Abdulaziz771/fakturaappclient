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
      path: '/agreement-document-view',
      name: 'agreement-document-view',
      component: () => import('./views/Agree/AgreementDocumentView')
    },
    {
      path: '/document-verify',
      name: 'document-verify',
      component: () => import('./views/document/VerifyDocumentView')
    },
    {
      path: '/document',
      name: 'document',
      component: () => import('./views/document/DocumentRouterView'),
      children: [
        {
          path: '',
          name: 'document-home',
          redirect: {name: 'document-create-home'}
        },
        {
          path: 'inbox',
          name: 'document-inbox',
          component: () => import('./views/document/InboxDocumentsView')
        },
        {
          path: 'outbox',
          name: 'document-outbox',
          component: () => import('./views/document/OutboxDocumentsView')
        },
        {
          path: 'draft',
          name: 'document-draft',
          component: () => import('./views/document/DraftDocumentsView')
        },
        {
          path: 'import',
          name: 'document-import',
          component: () => import('./views/document/ImportDocumentView')
        },
        {
          path: 'details/:id',
          name: 'document-details',
          component: () => import('./views/document/DocumentDetailsView')
        },
        {
          path: 'create',
          name: 'document-create',
          component: () => import('./views/document/create/CreateDocumentRouterView'),
          children: [
            {
              path: '',
              name: 'document-create-home',
              redirect: {name: 'document-create-index'}
            },
            {
              path: 'index',
              name: 'document-create-index',
              component: () => import('./views/document/create/CreateDocumentView')
            },
            {
              path: 'system-invoice',
              name: 'document-create-system-invoice',
              component: () => import('./views/document/create/SystemInvoiceView')
            },
            {
              path: 'system-usd-invoice',
              name: 'document-create-system-usd-invoice',
              component: () => import('./views/document/create/Systemusdinvoice')
            },
            {
              path: 'system-vat-invoice',
              name: 'document-create-system-vat-invoice',
              component: () => import('./views/document/create/SystemVatInvoice')
            },
            {
              path: 'system-vat-invoice',
              name: 'document-create-system-tax-invoice',
              component: () => import('./views/document/create/SystemTaxInvoice')
            }
          ]
        }
      ]
    },
    {
      path: '/settings/personal-area',
      name: 'settings-personal-area',
      component: () => import('./views/Settings/PersonalAreaSettingsView')
    },
    {
      path: '/counter-parties',
      name: 'counter-parties',
      component: () => import('./views/counterparties/Counterparties')
    },
    {
      path: '/finance',
      name: 'finance',
      component: () => import('./views/finance/FinanceRouterView'),
      children: [
        {
          path: '',
          name: 'finance-home',
          redirect: {name: 'finance-index'}
        },
        {
          path: 'index',
          name: 'finance-index',
          component: () => import('./views/finance/Index')
        },
        {
          path: 'deposit',
          name: 'finance-deposit',
          component: () => import('./views/finance/Deposit')
        }
      ]
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

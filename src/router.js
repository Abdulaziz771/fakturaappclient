import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/mains',
      name: 'mains',
      component: () => import('./layoutsView/Main'),
      redirect: {name: 'home'},
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('./views/Home')
        },
        {
          path: '/document',
          name: 'document',
          component: () => import('./views/document/DocumentRouterView'),
          children: [
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
              path: 'details',
              name: 'document-details',
              component: () => import('./views/document/DocumentDetailsView')
            },
            {
              path: 'create',
              name: 'create',
              component: () => import('./views/document/create/CreateDocumentRouterView'),
              children: [
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
          path: '/agree',
          name: 'agree',
          component: () => import('./views/document/DocumentAgreeView'),
          children: [
            {
              path: '/agree/agreement-document-view',
              name: 'agreement-document-view',
              component: () => import('./views/Agree/AgreementDocumentView')
            },
            {
              path: '/agree/agreement-done-document-view',
              name: 'agreement-done-document-view',
              component: () => import('./views/Agree/AgreementDoneDocumentView')
            },
          ]
        },
        {
          path: '/document-verify',
          name: 'document-verify',
          component: () => import('./views/document/VerifyDocumentView'),
          children: [
            {
              path: '/document-verify',
              name: 'document-router-verify',
              component: () => import('./views/document/create/VerifyDocumentRouter.vue')
            }
          ]
        },
        {
          path: "/settings",
          name: "settings",
          component: () => import('./views/document/create/DocumentSettingsVew'),
          children: [
            {
              path: 'personal-area',
              name: 'settings-personal-area',
              component: () => import('./views/Settings/PersonalAreaSettingsView')
            },
            {
              path: 'props-personal-area',
              name: 'props-area-settings-view',
              component: () => import('./views/Settings/PropsAreaSettingsView')
            },
            {
              path: 'subdivision',
              name: 'subdivision-settings-view',
              component: () => import('./views/Settings/SubdivisionSettingsView')
            },
            {
              path: 'label',
              name: 'label-settings-view',
              component: () => import('./views/Settings/LabelSettingsView')
            },
            {
              path: 'employee',
              name: 'employee-settings-view',
              component: () => import('./views/Settings/EmployeeSettingsView')
            },
            {
              path: 'reestr',
              name: 'reestr-settings-view',
              component: () => import('./views/Settings/RegistrySettingsView')
            },
            {
              path: 'matching',
              name: 'matching-settings-view',
              component: () => import('./views/Settings/MatchingSettingsView')
            },
            {
              path: 'roles',
              name: 'roles-settings-view',
              component: () => import('./views/Settings/RolesSettingsView')
            },
            {
              path: 'document-templates',
              name: 'document-templates-settings-view',
              component: () => import('./views/Settings/DocumentTemplatesSettingsView')
            },
            {
              path: 'access-api',
              name: 'access-api-settings-view',
              component: () => import('./views/Settings/AccessAPISettingsView')
            },
          ]

        },
        {
          path: '/counter-parties',
          name: 'counter-parties',
          component: () => import('./views/counterparties/Counterparties'),
          children: [
            {
              path: 'counter-parties',
              name: 'counter-parties-view',
              component: () => import('./views/counterparties/CounterPartiesView')
            },
          ]
        },
        {
          path: '/finance',
          name: 'finance',
          component: () => import('./views/finance/FinanceRouterView'),
          children: [
            {
              path: 'deposit',
              name: 'finance-deposit',
              component: () => import('./views/finance/Deposit')
            },
            {
              path: 'finance-information',
              name: 'finance-information',
              component: () => import('./views/finance/FinanceInformation')
            }
          ]
        }
      ]
    },
    {
      path: '/',
      redirect: {name: 'mains'}
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('./layoutsView/Auth'),
      redirect: {name: 'sign-in'},
      children: [
        {
          path: '/sign-in',
          name: 'sign-in',
          component: () => import('./registration/SignIn')
        },
        {
          path: '/registration',
          name: 'registration',
          component: () => import('./registration/Registration')
        },
        {
          path: '/recoveryUsername',
          name: 'forgot-username',
          component: () => import('./registration/forgotUserName')
        },
        {
          path: '/recoveryPassword',
          name: 'forgot-password',
          component: () => import('./registration/forgotPassword')
        },
      ]
    }
  ]
});

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


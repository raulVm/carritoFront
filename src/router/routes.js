
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      requiresAuth: true
    },
    children: [
      {path: '',
          redirect: to => {
            return { path: '/productos' }
          },
          component: () =>
              import ('components/productos/productosComponent.vue')
      },
      { path: 'productos', name: 'productosComponent', component: () => import('components/productos/productosComponent.vue') },
      { path: 'compra', name: 'compraComponent', component: () => import('components/compra/compraComponent.vue') },
    ]
  },
  {
    path: '/login',
    component: () =>
        import ('components/Login.vue'),
    children: [{
        path: '',
        component: () =>
            import ('pages/Login.vue')
    }]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

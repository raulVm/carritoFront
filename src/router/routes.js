
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'productosComponent', component: () => import('components/productos/productosComponent.vue') },
      { path: 'compra', name: 'listaCompra', component: () => import('components/compra/listaCompra.vue') }
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


const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/Index.vue') },
      { path: '/components', component: () => import('pages/Components.vue') },
      { path: '/statistics', component: () => import('pages/statistics.vue') },
      { path: '/compaings', component: () => import('pages/compaings.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

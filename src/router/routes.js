
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/Index.vue') },
      { path: '/components', component: () => import('pages/Components.vue') },
      { path: '/statistics', component: () => import('pages/statistics.vue') },
      { path: '/compaings', component: () => import('pages/compaings.vue') },
      { path: '/ads', component: () => import('pages/ads.vue') },
      { path: '/selective', component: () => import('pages/selective.vue') },
      { path: '/createad', component: () => import('pages/createAd.vue') },
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

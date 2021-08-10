import iec60751 from 'pages/iec60751'
import PageIndex from 'pages/Index'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: PageIndex },
      { path: 'iec60751', component: iec60751 }
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

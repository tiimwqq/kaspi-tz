// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '~/components/Layout.vue'
import AllPayments from '~/pages/allPayments.vue'
import History from '~/pages/history.vue'
import Index from '~/pages/index.vue'

const routes = [
  {
    path: '/payments',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Payments',
        component: Index,
      },
      {
        path: 'history',
        name: 'PaymentHistory',
        component: History,
      },
      {
        path: 'all',
        name: 'AllPayments',
        component: AllPayments,
      },
    ],
  },
  {
    path: '/',
    redirect: '/payments',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

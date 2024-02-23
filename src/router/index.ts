import { createRouter, createWebHistory } from 'vue-router'

import { getCookieToken } from '@/plugins/vueuse'

import LoginView from '@/views/LoginView.vue'

/**
 * 路由阻擋
 */

// const checkAuth = async () => {
//   if (!getCookieToken('loginToken')) {
//     return { path: '/login' }
//   } else {
//     return true
//   }
// }

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/example',
      name: 'example',
      component: () => import('@/views/ExampleView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/room',
      name: 'room',
      component: () => import('@/views/RoomView.vue')
    },
    {
      path: '/room/:roomID',
      name: 'roomID',
      component: () => import('@/views/RoomOneView.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('@/views/OrderView.vue')
    },
    {
      path: '/order/success',
      name: 'orderSuccess',
      component: () => import('@/views/OrderSuccessView.vue')
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('@/views/MemberView.vue')
    },
    {
      path: '/member/orderList',
      name: 'memberOrderList',
      component: () => import('@/views/MemberOrderListView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

export default router

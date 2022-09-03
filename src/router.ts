import { createRouter, createWebHashHistory } from 'vue-router'
import PageLayout from './PageLayout.vue'
import EmptyPage from './EmptyPage.vue'

import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: EmptyPage,
  },
  {
    component: PageLayout,
    path: '/5000',
    name: '5000',
    props: () => ({ length: 5000 }),
  },
  {
    component: PageLayout,
    path: '/10000',
    name: '10000',
    props: () => ({ length: 10000 }),
  },
  {
    component: PageLayout,
    path: '/20000',
    name: '20000',
    props: () => ({ length: 20000 }),
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/about/page',
    name: 'Page',
    component: () => import(/* webpackChunkName: "page" */ '../views/Page.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length

  to.meta.transitionName =
    toDepth - fromDepth === 0
      ? 'fade'
      : toDepth < fromDepth
        ? 'prevPage'
        : 'nextPage'
})

export default router

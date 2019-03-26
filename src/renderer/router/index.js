import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)
Vue.use(NProgress)

NProgress.configure({
  showSpinner: false
})

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'menu',
      component: require('@/components/Menu').default
    },
    {
      path: '/shop',
      name: 'shop',
      component: require('@/components/Shop/Shop').default
    },
    {
      path: '/member',
      name: 'member',
      component: require('@/components/Member/Member').default
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: require('@/components/Inventory/Inventory').default
    },
    {
      path: '/order',
      name: 'order',
      component: require('@/components/Order/Order').default
    },
    {
      path: '/replacement',
      name: 'replacement',
      component: require('@/components/Replacement/Replacement').default
    },
    {
      path: '/record',
      name: 'record',
      component: require('@/components/Record/Record').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from, next) => {
  NProgress.done()
})

export default router

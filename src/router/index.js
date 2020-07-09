import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Person',
    component: () => import('@views/Person.vue')
  },
  {
    path: '/Monitor',
    name: 'Monitor',
    component: () => import('@views/Monitor.vue')
  },
  {
    path: '/Event',
    name: 'Event',

    component: () => import('@views/Event.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

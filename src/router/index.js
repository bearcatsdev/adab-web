import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/app',
    name: 'Adab',
    component: () => import('../views/App/Root.vue'),
    children: [
      { path: '/', name: 'Dashboard', component: () => import('../views/App/Dashboard.vue') },
      { path: 'dashboard', name: 'Dashboard', component: () => import('../views/App/Dashboard.vue') },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

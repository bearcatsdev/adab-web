import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
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
      { path: '/', redirect: '/app/dashboard', name: 'App', component: () => import('../views/App/Dashboard.vue') },
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

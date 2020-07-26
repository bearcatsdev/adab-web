import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            auth: true,
            title: 'Login Adab'
        },
        component: () => import('../views/Login.vue'),
    },
    {
        path: '/app',
        name: 'Adab',
        component: () => import('../views/App/Root.vue'),
        children: [
            {
                path: '/',
                redirect: '/app/dashboard',
                name: 'App',
                component: () => import('../views/App/Dashboard.vue'),
            },
            {
                path: 'dashboard',
                name: 'Dashboard',
                meta: {
                    title: 'Dashboard | Adab'
                },
                component: () => import('../views/App/Dashboard.vue'),
            },
            {
                path: 'inbox',
                name: 'Inbox',
                meta: {
                    title: 'Inbox | Adab'
                },
                component: () => import('../views/App/Inbox.vue'),
            },
            {
                path: 'class',
                name: 'Class',
                meta: {
                    title: 'Class | Adab'
                },
                component: () => import('../views/App/Class.vue'),
            },
            {
                path: 'discussion',
                name: 'Discussion',
                meta: {
                    title: 'Discussion | Adab'
                },
                component: () => import('../views/App/Discussion.vue'),
            },
            {
                path: 'schedule',
                name: 'Schedule',
                meta: {
                    title: 'Schedule | Adab'
                },
                component: () => import('../views/App/Schedule.vue'),
            },
            {
                path: 'session/:id',
                name: 'Session',

                component: () => import('../views/App/Session.vue'),
            },
        ]
    },
    {
        path: '*',
        name: 'Not Found',
        component: () => import('../views/NotFound.vue'),
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

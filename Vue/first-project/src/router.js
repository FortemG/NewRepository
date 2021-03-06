import Vue from 'vue'
import Router from 'vue-router'
import vHome from './pages/vHome.vue'

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: vHome
        },
        {
            path: '/login',
            component: () => import('./pages/vLogin.vue')
        }
    ]

})
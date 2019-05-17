import Vue from 'vue'
import Router from 'vue-router'
import index from '../viwes/index'
import send from '../viwes/send'
import my from '../viwes/my'
import detail from '../viwes/detail'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/index',
        component: index
    }, {
        path: '/index',
        name: '/index',
        component: index
    }, {
        path: '/send',
        name: '/send',
        component: send
    }, {
        path: '/my',
        name: '/my',
        component: my
    }, {
        path: '/detail/:id',
        name: '/detail',
        component: detail
    }]
})
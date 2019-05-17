import Vue from 'vue'
import App from './App'
import router from './router'
import mydl from '../src/components/mydl'
Vue.component('mydl', mydl)
import axios from 'axios';
Vue.prototype.$http = axios;
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
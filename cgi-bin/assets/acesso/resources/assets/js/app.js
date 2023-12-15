import Vue from 'vue' //337
import App from './App.vue' //96
import {routes} from './routes' //25
import VueRouter from 'vue-router/dist/vue-router.min.js' //87.4
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.use(VueRouter);

Vue.use(VueLoading);
Vue.component('loading', VueLoading);


window.Vue = Vue;

const router = new VueRouter({
    routes,
    mode: 'history'
});


new Vue({
    el: '#app',
    router,
    components: {
        //'loading': VueLoading,
    },
    data: {
        seen: true,
        isLoaded: false,
        fullPage: true,
        errors: false,
        notFound: false,
        current_page : {},
        next: false,
        prev: false,
        NotAuthinticated:false
    },
    render: h => h(App)
});


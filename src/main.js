/**
 * Created by zhaoyongsheng on 16/10/18.
 */

import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import routes from "./router";
import Store from "./store";
import App from "./App.vue";

Vue.config.devtools = true;
Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
    routes, mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
            } else {
            return { x: 0, y: 0 }
            }
    }
})

const store = new Vuex.Store(Store)

new Vue({
    router,
    store
}).$mount("#demo");

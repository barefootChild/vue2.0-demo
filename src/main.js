/**
 * Created by zhaoyongsheng on 16/10/18.
 */

import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router";
import SelfAnimate from "./components/Animate";

Vue.config.devtools = true;
Vue.use(VueRouter);

const router = new VueRouter({routes})
new Vue({
    router
}).$mount("#demo");
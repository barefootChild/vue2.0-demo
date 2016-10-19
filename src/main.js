/**
 * Created by zhaoyongsheng on 16/10/18.
 */

import Vue from "vue";
import SelfAnimate from "./components/Animate";

Vue.config.devtools = true;
new Vue({
    render(h) {
        return h(SelfAnimate)
    }
}).$mount("#demo");
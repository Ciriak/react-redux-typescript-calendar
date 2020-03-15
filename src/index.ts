import { BootstrapVue } from "bootstrap-vue";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import App from "./App.vue";
import Week from "./components/week/Week.vue";

const routes = [
    {
        path: "/", component: Week
    },
    { path: "*", redirect: "/" }
];

const router = new VueRouter({
    mode: "history",
    routes,
});

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(Vuex);
// must be called after vue.use

// tslint:disable-next-line: no-unused-expression
new Vue({
    router,
    el: "#app",
    render: (h) => h(App),
});

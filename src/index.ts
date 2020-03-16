import { BootstrapVue } from "bootstrap-vue";
import Vue from "vue";
import VueRouter from "vue-router";
import VueMoment from "vue-moment";
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
Vue.use(VueMoment);

/**
 * Bootstrap import
 */
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// tslint:disable-next-line: no-unused-expression
new Vue({
    router,
    el: "#app",
    render: (h) => h(App),
});

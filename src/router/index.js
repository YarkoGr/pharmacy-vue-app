import Vue from "vue";
import VueRouter from "vue-router";
import { RoutesNames, RoutesPath } from "../router/routes.js";

Vue.use(VueRouter);

const TheMain = () =>
    import ( /* webpackChunkName: "about" */ "../sections/TheMain.vue");
const Home = () =>
    import ( /* webpackChunkName: "about" */ "../sections/Home.vue");
const FinalPage = () =>
    import ( /* webpackChunkName: "about" */ "../sections/FinalPage.vue");

const routes = [{
        name: RoutesNames.main,
        path: RoutesPath.main,
        component: TheMain,
    },
    {
        name: RoutesNames.home,
        path: RoutesPath.home,
        component: Home,
    },
    {
        name: RoutesNames.finalPage,
        path: RoutesPath.finalPage,
        component: FinalPage,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        sadCounter: "0",
        happyCounter: "0",
        heartCounter: "0",
    },
    getters: {
        sadCounter: (state) => state.sadCounter,
        happyCounter: (state) => state.happyCounter,
        heartCounter: (state) => state.heartCounter,
    },
    mutations: {
        sadIncrement: (state) => state.sadCounter++,
        happyIncrement: (state) => state.happyCounter++,
        heartIncrement: (state) => state.heartCounter++,
    },
    actions: {},
    modules: {},
});
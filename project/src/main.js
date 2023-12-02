import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Vuex from "vuex";

Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  store: new Vuex.Store(store),
  render: (h) => h(App),
}).$mount("#app");

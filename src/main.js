import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.component("cabeca", require("./components/cabeca.vue").default);
Vue.component("rodape", require("./components/rodape.vue").default);
Vue.component("formulario", require("./components/form.vue").default);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");

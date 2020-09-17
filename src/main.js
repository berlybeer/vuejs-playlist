import Vue from "vue";
import App from "./App.vue";
Vue.component("name", {
  template: "<p>"
});

new Vue({
  el: "#app",
  render: h => h(App)
});

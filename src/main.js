import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import Routes from "./routes";

//use packages
Vue.use(VueResource);
Vue.use(VueRouter);

//Register routes
const router = new VueRouter({
  routes: Routes
});
//Custom directives

Vue.directive("theme", {
  bind(el, binding, vnode) {
    if (binding.value == "wide") {
      el.style.maxWidth = "1200px";
    } else if (binding.value == "narrow") {
      el.style.maxWidth = "500px";
    }
    if (binding.arg == "column") {
      el.style.background = "#ddd";
      el.style.padding = "20px";
    }
  }
});

//Filter

Vue.filter("snippet", function(value) {
  return value.slice(0, 100) + "...";
});

new Vue({
  el: "#app",
  render: h => h(App),
  router: router
});

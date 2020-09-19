import Vue from "vue";
import Button from "./components/Button.vue";
import Icon from "./components/Icon.vue";
Vue.component("u-button", Button);
Vue.component("u-icon", Icon);
new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
  }
});
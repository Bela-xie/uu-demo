import Vue from "vue";
import Button from "./components/Button.vue";
import Icon from "./components/Icon.vue";
import ButtonGroup from "./components/ButtonGroup.vue";
import Input from "./components/Input.vue";
import "./assets/styles/reset.scss";
import "./assets/styles/global.scss";
Vue.component("u-button", Button);
Vue.component("u-icon", Icon);
Vue.component("u-button-group", ButtonGroup);
Vue.component("u-input", Input);
new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
    message: "haha"
  },
  methods: {
    inputChange(e) {
      console.log(e);
    },
  },
});
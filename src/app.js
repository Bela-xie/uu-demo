import Vue from "vue";
import Button from "./components/button.vue";
import Icon from "./components/icon.vue";
import ButtonGroup from "./components/buttonGroup.vue";
import Input from "./components/input.vue";
import Row from "./components/row.vue";
import Col from "./components/col.vue";
import "./assets/styles/reset.scss";
import "./assets/styles/global.scss";
Vue.component("u-button", Button);
Vue.component("u-icon", Icon);
Vue.component("u-button-group", ButtonGroup);
Vue.component("u-input", Input);
Vue.component("u-row", Row);
Vue.component("u-col", Col);
new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
  },
  methods: {
    inputChange(e) {
      console.log(e);
    },
  },
});
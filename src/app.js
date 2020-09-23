import Vue from "vue";
import Button from "./components/button.vue";
import Icon from "./components/icon.vue";
import ButtonGroup from "./components/buttonGroup.vue";
import Input from "./components/input.vue";
import Row from "./components/row.vue";
import Col from "./components/col.vue";
import Layout from "./components/layout.vue";
import Header from "./components/header.vue";
import Content from "./components/content.vue";
import Footer from "./components/footer.vue";
import Sider from "./components/sider.vue";
import "./assets/styles/reset.scss";
import "./assets/styles/global.scss";
import plugin from "./plugin.js"
Vue.component("u-button", Button);
Vue.component("u-icon", Icon);
Vue.component("u-button-group", ButtonGroup);
Vue.component("u-input", Input);
Vue.component("u-row", Row);
Vue.component("u-col", Col);
Vue.component("u-layout", Layout);
Vue.component("u-header", Header);
Vue.component("u-content", Content);
Vue.component("u-footer", Footer);
Vue.component("u-sider", Sider);
Vue.use(plugin);
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
  created() {
    this.$toast("一个消息一个消息一个消息一个消息一个消息一个消息一个消息一个消息一个消息一个消息一个消息一个消息", {
      autoClose: true,
      closeButton: {
        text: "关闭",
        callback(toast) {
          toast.log();
        }
      },
    })
  }
});
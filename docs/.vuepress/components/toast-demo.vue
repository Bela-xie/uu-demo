<template>
  <div>
    <u-button @click="auto">设置 zIndex</u-button>&nbsp;&nbsp; <u-button @click="auto">会自动关闭</u-button>&nbsp;&nbsp; <u-button @click="auto">点击按钮才关闭</u-button>&nbsp;&nbsp; <u-button @click="auto">支持 HTML 语法</u-button>&nbsp;&nbsp;
    <br />
    <u-button @click="top">上方弹出</u-button>
    <u-button @click="middle">中间弹出</u-button>
    <u-button @click="bottom">下方弹出</u-button>
  </div>
</template>
<script>
import Button from "../../../src/components/button.vue";
import plugin from "../../../src/plugin.js";
import Vue from "vue";
Vue.use(plugin);
export default {
  components: {
    "u-button": Button,
  },
  methods: {
    auto() {
      this.$toast("我是 toast 内容", {
        autoClose: 5,
        closeButton: {
          text: "确定",
          callback: () => {
            console.log("回调的输出");
          },
        },
        enableHTML: true,
      });
    },
    top() {
      this.$toast("我是 toast 内容", { position: "top" });
    },
    middle() {
      this.$toast("我是 toast 内容", { position: "middle" });
    },
    bottom() {
      this.$toast("我是 toast 内容", { position: "bottom" });
    },
  },
};
</script>

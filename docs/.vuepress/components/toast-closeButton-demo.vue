<template>
  <div>
    <u-button @click="onAutoClose">
      3秒钟后自动关闭
    </u-button>
    <u-button @click="onClickClose">
      点击按钮关闭弹出内容
    </u-button>
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
    onAutoClose() {
      this.$toast("我是 Toast 内容", {
        position: "top",
        zIndex: 20,
        autoClose: 3,
        closeButton: {
          text: "关闭",
          callback: () => {
            console.log("关闭后可执行该回调函数");
          },
        },
      });
    },
    onClickClose() {
      this.$toast("我是 Toast 内容", {
        position: "top",
        zIndex: 20,
        autoClose: false, //不支持自动关闭
        closeButton: {
          text: "关闭",
          callback: () => {
            console.log("关闭后可执行该回调函数");
          },
        },
      });
    },
  },
};
</script>

<template>
  <div>
    <u-button @click="onAutoClose">
      3秒钟后自动关闭
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
      this.$toast("我是 Toast 内容，<a href='http://www.baidu.com'>百度</a>", {
        enableHtml: true,
        zIndex: 20,
        position: "top",
        autoClose: 3,
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

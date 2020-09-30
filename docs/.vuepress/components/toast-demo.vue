<template>
  <div>
    <u-button @click="$toast('我是 toast 内容', { position: 'top', zIndex: 20 })">
      上方弹出
    </u-button>
    <u-button @click="$toast('我是 toast 内容', { position: 'middle', zIndex: 20 })">
      中间弹出
    </u-button>
    <u-button @click="$toast('我是 toast 内容', { position: 'bottom', zIndex: 20 })">
      下方弹出
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
};
</script>

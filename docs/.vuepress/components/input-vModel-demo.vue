<template>
  <div>
    <template>
      <u-input v-model="value"></u-input>
      <span>value:&nbsp;{{ value }}</span>
      <p style="font-size:6px;color:gray;">（在输入框中输入内容，可以看到 value 的变化）</p>
    </template>
  </div>
</template>

<script>
import Input from "../../../src/components/input.vue";
export default {
  data() {
    return {
      value: "",
    };
  },
  components: {
    "u-input": Input,
  },
};
</script>

<template>
  <div>
    <template>
      <span>普通输入框：</span><u-input></u-input><br /><br />
      <span>禁用状态的输入框：</span><u-input disabled></u-input><br /><br />
      <span>只读状态的输入框：</span><u-input readonly></u-input><br /><br />
      <span>有错误信息的输入框：</span><u-input error="错误信息"></u-input><br /><br />
      <span>支持双向绑定的输入框：</span><u-input v-model="value"></u-input>
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

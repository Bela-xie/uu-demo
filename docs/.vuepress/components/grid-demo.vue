<template>
  <div>
    <u-button>默认按钮</u-button>
    <u-button icon="setting">默认按钮</u-button>
    <u-button :loading="true">默认按钮</u-button>
    <u-button disabled>默认按钮</u-button>
    <u-button icon="setting" iconPosition="right">默认按钮</u-button>
  </div>
</template>

<script>
import Button from "../../../src/components/button.vue";
export default {
  components: {
    "u-button": Button,
  },
};
</script>

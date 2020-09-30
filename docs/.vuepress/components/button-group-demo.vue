<template>
  <u-button-group>
    <u-button icon="left">上一页</u-button>
    <u-button>更多</u-button>
    <u-button icon="right" icon-position="right">下一页</u-button>
  </u-button-group>
</template>

<script>
import ButtonGroup from "../../../src/components/buttonGroup.vue";
import Button from "../../../src/components/button.vue";
export default {
  components: {
    "u-button-group": ButtonGroup,
    "u-button": Button,
  },
};
</script>

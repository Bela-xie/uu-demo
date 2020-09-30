<template>
  <div>
    <u-popover>
      <u-button>上方弹出</u-button>
      <template slot="content">
        弹出内容
      </template>
    </u-popover>
    <u-popover position="bottom">
      <u-button>下方弹出</u-button>
      <template slot="content">
        弹出内容
      </template>
    </u-popover>
    <u-popover position="left">
      <u-button>左边弹出</u-button>
      <template slot="content">
        弹出内容
      </template>
    </u-popover>
    <u-popover position="right">
      <u-button>右边弹出</u-button>
      <template slot="content">
        弹出内容
      </template>
    </u-popover>
  </div>
</template>

<script>
import Button from "../../../src/components/button.vue";
import Popover from "../../../src/components/popover.vue";
export default {
  components: {
    "u-button": Button,
    "u-popover": Popover,
  },
};
</script>

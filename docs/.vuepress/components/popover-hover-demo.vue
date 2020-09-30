<template>
  <div>
    <u-popover trigger="hover">
      <u-button>上方弹出</u-button>
      <template slot="content">
        弹出内容
      </template>
    </u-popover>
    <u-popover position="bottom" trigger="hover">
      <u-button>下方弹出</u-button>
      <template slot="content">
        弹出内容
      </template>
    </u-popover>
    <u-popover position="left" trigger="hover">
      <u-button>左边弹出</u-button>
      <template slot="content">
        弹出内容
      </template>
    </u-popover>
    <u-popover position="right" trigger="hover">
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

<template>
  <div>
    <u-collapse :selected.sync="selected">
      <u-collapse-item title="标题1" name="1">内容1</u-collapse-item>
      <u-collapse-item title="标题2" name="2">内容2</u-collapse-item>
      <u-collapse-item title="标题3" name="3">内容3</u-collapse-item>
    </u-collapse>
  </div>
</template>
<script>
import Collapse from "../../../src/components/collapse.vue";
import CollapseItem from "../../../src/components/collapse-item.vue";

export default {
  components: {
    "u-collapse": Collapse,
    "u-collapse-item": CollapseItem,
  },
  data() {
    return { selected: ["1"] };
  },
};
</script>

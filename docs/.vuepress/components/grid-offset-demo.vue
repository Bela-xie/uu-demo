<template>
  <div>
    <u-row align="left">
      <u-col span="6">span:6</u-col>
      <u-col span="6" offset="6">span:6 , offset:6 <br />(向右偏移6列)</u-col>
      <u-col span="6">span:6</u-col>
    </u-row>
  </div>
</template>

<script>
import Col from "../../../src/components/col.vue";
import Row from "../../../src/components/row.vue";
export default {
  components: {
    "u-col": Col,
    "u-row": Row,
  },
};
</script>
<style lang="scss" scoped>
.col {
  box-sizing: border-box;
  height: 10vh;
  border: 1px solid rgb(196, 189, 189);
  background-color: #3eaf7c;
  color: white;
}
</style>

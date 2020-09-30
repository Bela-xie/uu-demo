<template>
  <div>
    <u-row>
      <u-col span="4">span:4</u-col>
      <u-col span="4">span:4</u-col>
      <u-col span="4">span:4</u-col>
      <u-col span="4">span:4</u-col>
      <u-col span="4">span:4</u-col>
      <u-col span="4">span:4</u-col>
    </u-row>
    <u-row>
      <u-col span="6">span:6</u-col>
      <u-col span="6">span:6</u-col>
      <u-col span="6">span:6</u-col>
      <u-col span="6">span:6</u-col>
    </u-row>
    <u-row>
      <u-col span="8">span:8</u-col>
      <u-col span="8">span:8</u-col>
      <u-col span="8">span:8</u-col>
    </u-row>
    <u-row>
      <u-col span="12">span:12</u-col>
      <u-col span="12">span:12</u-col>
    </u-row>
    <u-row>
      <u-col span="24">span:24</u-col>
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

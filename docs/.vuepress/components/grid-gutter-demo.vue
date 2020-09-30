<template>
  <div>
    <u-row gutter="20">
      <u-col span="6"><span>span:6;gutter:20</span></u-col>
      <u-col span="6"><span>span:6;gutter:20</span></u-col>
      <u-col span="6"><span>span:6;gutter:20</span></u-col>
      <u-col span="6"><span>span:6;gutter:20</span></u-col>
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
  > span {
    text-align: center;
    height: 10vh;
    background-color: #3eaf7c;
    display: block;
    color: white;
  }
}
</style>

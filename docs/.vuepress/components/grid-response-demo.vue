<template>
  <div>
    <u-row align="left">
      <u-col span="24" :ipad="{ span: 12 }" :pc="{ span: 6 }">
        ipone-span:24；ipad-span:12；pc-span:6
      </u-col>
      <u-col span="24" :ipad="{ span: 12 }" :pc="{ span: 6 }">
        ipone-span:24；ipad-span:12；pc-span:6
      </u-col>
      <u-col span="24" :ipad="{ span: 12 }" :pc="{ span: 6 }">
        ipone-span:24；ipad-span:12；pc-span:6
      </u-col>
      <u-col span="24" :ipad="{ span: 12 }" :pc="{ span: 6 }">
        ipone-span:24；ipad-span:12；pc-span:6
      </u-col>
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

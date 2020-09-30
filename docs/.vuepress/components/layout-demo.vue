<template>
  <div class="wrapper">
    <u-layout>
      <u-header> header </u-header>
      <u-content> content </u-content>
      <u-footer> footer </u-footer>
    </u-layout>
    <br />
    <u-layout>
      <u-header> header </u-header>
      <u-layout>
        <u-sider> sider </u-sider>
        <u-content> content </u-content>
      </u-layout>
      <u-footer> footer </u-footer>
    </u-layout>
    <br />
    <u-layout>
      <u-header> header </u-header>
      <u-layout>
        <u-sider> sider </u-sider>
        <u-layout>
          <u-content> content </u-content>
          <u-footer> footer </u-footer>
        </u-layout>
      </u-layout>
    </u-layout>
  </div>
</template>
<script>
import Layout from "../../../src/components/layout.vue";
import Header from "../../../src/components/header.vue";
import Footer from "../../../src/components/footer.vue";
import Content from "../../../src/components/content.vue";
import Sider from "../../../src/components/sider.vue";
export default {
  components: {
    "u-layout": Layout,
    "u-header": Header,
    "u-content": Content,
    "u-footer": Footer,
    "u-sider": Sider,
  },
};
</script>
<style lang="scss" scoped>
$background-color: #3eaf7c;
.layout {
  height: 30vh;
  > .header {
    background-color: $background-color;
    height: 20%;
  }
  > .content {
    background-color: lighten($background-color, 40%);
  }
  > .sider {
    width: 100px;
    background-color: lighten($background-color, 20%);
  }
  > .footer {
    background-color: $background-color;
  }
  > .layout {
    height: 20vh;
    > .layout {
      height: 100%;
    }
  }
}
</style>

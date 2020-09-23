<template>
  <transition name="slider">
    <div class="sider" v-if="visible">
      <button @click="visible=false">close</button>
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: "UUSider",
  data() {
    return {
      visible: "true"
    };
  }
};
</script>

<style lang="scss" scoped>
.sider {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.slider-enter-active,
.slider-leave-active {
  transition: all 1s;
}
.slider-enter,
.slider-leave-to {
  margin-left: -300px;
}
</style>
<template>
  <div class="layout" :class="layoutClass">
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      layoutClass: {
        hasSider: false
      }
    };
  },
  mounted() {
    const children = this.$children;
    children.forEach(vm => {
      if (vm.$options.name === "UUSider") {
        this.layoutClass.hasSider = true;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  &.hasSider {
    flex-direction: row;
  }
}
</style>
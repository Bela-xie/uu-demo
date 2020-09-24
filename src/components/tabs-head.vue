<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="active-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "UUTabsHead",
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", (name, vm) => {
      if (vm) {
        const { width, left } = vm.$el.getBoundingClientRect();
        this.$refs.line.style.width = width + "px";
        this.$refs.line.style.left = left + "px";
      }
    });
  }
};
</script>

<style lang="scss" scoped>
$tabs-height: 40px;
$blue: blue;
$border-bottom-color: #ddd;
.tabs-head {
  display: flex;
  height: $tabs-height;
  justify-content: flex-start;
  position: relative;
  border-bottom: 1px solid $border-bottom-color;
  > .line {
    position: absolute;
    bottom: 0;
    height: 1px;
    border-bottom: 1px solid $blue;
    transition: all 350ms;
  }
  > .active-wrapper {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="active-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "UUTabsHead",
  inject: ["eventBus"]
};
</script>

<style lang="scss" scoped>
$tabs-height: 40px;
.tabs-head {
  display: flex;
  height: $tabs-height;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid red;
  > .active-wrapper {
    margin-left: auto;
  }
}
</style>

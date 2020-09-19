<template>
  <div class="u-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    //避免用户使用其他元素包裹 u-button
    for (let node of this.$el.children) {
      //该循环里只能使用 of ，不能使用 in
      const name = node.nodeName.toLowerCase();
      if (name !== "button") {
        console.warn(
          `u-button-group中只能包含 button 元素，而你使用的是 ${name}`
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.u-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .u-button {
    border-radius: 0px;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>>

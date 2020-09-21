<template>
  <div class="u-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"UUButtonGroup",
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
@import "../assets/styles/helper.scss";
.u-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .u-button {
    border-radius: 0px;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>>

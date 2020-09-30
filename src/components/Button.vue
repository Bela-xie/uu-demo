<template>
  <button :class="{ [iconPosition]: true, 'u-button': true }" @click="$emit('click')">
    <span v-if="icon && !loading">
      <u-icon :name="icon" />
    </span>
    <span v-if="loading" class="loading">
      <u-icon name="loading" />
    </span>
    <div class="content">
      <slot />
    </div>
  </button>
</template>
<script lang="ts">
import Icon from "./icon.vue";
export default {
  name: "UUButton",
  props: {
    icon: {},
    loading: { type: Boolean },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      }
    }
  },
  //测试的时候只打包了button，因此在app.js中全局设置的u-icon组件没有用，此处需要局部注册一下
  components: {
    "u-icon": Icon
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/helper.scss";
.u-button {
  font-size: $font-size;
  background-color: $button-bg;
  border-radius: $border-radius;
  padding: 0px 1em;
  color: $color;
  height: $button-height;
  border: 1px solid $border-color;
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  &.left {
    > span {
      margin-right: 0.3em;
    }
  }
  &.right {
    > span {
      order: 2;
      margin-left: 0.3em;
    }
    > .content {
      order: 1;
    }
  }

  > .loading {
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    animation: spin 1s infinite linear;
  }
}
</style>

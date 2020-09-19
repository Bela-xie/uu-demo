<template>
  <button :class="{[iconPosition]:true,'u-button':true}" @click="$emit('click')">
    <span v-if="icon&&!loading">
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
export default {
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
  }
};
</script>
<style lang="scss" scoped>
.u-button {
  font-size: var(--font-size);
  background-color: var(--button-bg);
  border-radius: var(--border-radius);
  padding: 0px 1em;
  color: var(--color);
  height: var(--button-height);
  border: 1px solid var(--border-color);
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
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

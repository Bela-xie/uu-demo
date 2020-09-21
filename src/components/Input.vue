<template>
  <div class="wrapper" :class="{ error }">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly" @change="$emit('change', $event)" @input="$emit('input', $event)" @blur="$emit('blur', $event)" @focus="$emit('focus', $event)" />
    <template v-if="error">
      <u-icon name="error" class="errorIcon"></u-icon>
      <span class="errorMessage">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import Icon from "./Icon.vue";
export default {
  name: "UUInput",
  components: {
    "u-icon": Icon,
  },
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
    readonly: {
      type: Boolean,
    },
    error: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/helper.scss";
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    height: $input-height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      outline: none;
      box-shadow: inset 0 1px 3px rgba($color: #000000, $alpha: 0.5);
    }
    &[disabled],
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: $red;
    }
    > .errorIcon {
      fill: $red;
    }
    > .errorMessage {
      color: $red;
    }
  }
}
</style>

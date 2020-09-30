<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot />
  </div>
</template>

<script>
export default {
  name: "UURow",
  props: {
    gutter: {
      type: [String, Number],
    },
    align: {
      type: String,
      validator(value) {
        return ["left", "center", "right"].indexOf(value) >= 0;
      },
    },
  },
  computed: {
    rowStyle() {
      const { gutter } = this;
      return {
        marginLeft: -gutter / 2 + "px",
        marginRight: -gutter / 2 + "px",
      };
    },
    rowClass() {
      const { align } = this;
      return [align && `align-${align}`];
    },
  },
  mounted() {
    this.$children.forEach((child) => {
      child.gutter = this.gutter;
    });
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>

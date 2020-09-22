<template>
  <div class="row" :style="rowStyle">
    <slot />
  </div>
</template>

<script>
export default {
  name: "UURow",
  props: {
    gutter: {
      type: [String, Number]
    }
  },
  computed: {
    rowStyle() {
      const { gutter } = this;
      return {
        marginLeft: -gutter / 2 + "px",
        marginRight: -gutter / 2 + "px"
      };
    }
  },
  mounted() {
    this.$children.forEach(child => {
      child.gutter = this.gutter;
    });
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
</style>
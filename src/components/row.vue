<template>
  <div class="row" :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}">
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
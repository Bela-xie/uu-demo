<template>
  <div class="col" :class="colClass" :style="colStyle">
    <div style="border:1px solid green;height:32px">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "UUCol",
  computed: {
    colStyle() {
      const { gutter } = this;
      return {
        paddingLeft: gutter / 2 + "px",
        paddingRight: gutter / 2 + "px"
      };
    },
    colClass() {
      const { span, offset } = this;
      return [span && `col-${span}`, offset && `offset-${offset}`];
    }
  },
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    }
  },
  data: function() {
    return {
      gutter: 0
    };
  }
};
</script>

<style lang="scss" scoped>
.col {
  //   height: 32px;
  width: 50%;
  //   border: 1px solid black;
  //   background-color: #999;
  $classPrefix: col-;
  @for $n from 1 through 24 {
    &.#{$classPrefix}#{$n} {
      width: $n / 24 * 100%;
    }
  }
  $classPrefix: offset-;
  @for $n from 1 through 24 {
    &.#{$classPrefix}#{$n} {
      margin-left: $n / 24 * 100%;
    }
  }
}
</style>
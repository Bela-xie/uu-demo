<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot />
  </div>
</template>

<script>
const validator = value => {
  const keys = Object.keys(value);
  let valid = true;
  keys.forEach(key => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};
export default {
  name: "UUCol",
  methods: {
    createClasses(obj, str) {
      if (obj) {
        return [
          obj.span && `${str}-col-${obj.span}`,
          obj.offset && `${str}-offset-${obj.offset}`
        ];
      } else {
        return [];
      }
    }
  },
  computed: {
    colStyle() {
      const { gutter } = this;
      return {
        paddingLeft: gutter / 2 + "px",
        paddingRight: gutter / 2 + "px"
      };
    },

    colClass() {
      const { ipad, smallPc, pc, bigPc, createClasses } = this;
      const { span, offset } = this;
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...createClasses(ipad, "ipad"),
        ...createClasses(smallPc, "smallPc"),
        ...createClasses(pc, "pc"),
        ...createClasses(bigPc, "bigPc")
      ];
    }
  },
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    ipad: {
      type: Object,
      validator
    },
    smallPc: {
      type: Object,
      validator
    },
    pc: {
      type: Object,
      validator
    },
    bigPc: {
      type: Object,
      validator
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
  @media (min-width: 576px) {
    $classPrefix: ipad-col-;
    @for $n from 1 through 24 {
      &.#{$classPrefix}#{$n} {
        width: $n / 24 * 100%;
      }
    }
    $classPrefix: ipad-offset-;
    @for $n from 1 through 24 {
      &.#{$classPrefix}#{$n} {
        margin-left: $n / 24 * 100%;
      }
    }
  }
  @media (min-width: 768px) {
    $classPrefix: smallPc-col-;
    @for $n from 1 through 24 {
      &.#{$classPrefix}#{$n} {
        width: $n / 24 * 100%;
      }
    }
    $classPrefix: smallPc-offset-;
    @for $n from 1 through 24 {
      &.#{$classPrefix}#{$n} {
        margin-left: $n / 24 * 100%;
      }
    }
  }
  @media (min-width: 992px) {
    $classPrefix: pc-col-;
    @for $n from 1 through 24 {
      &.#{$classPrefix}#{$n} {
        width: $n / 24 * 100%;
      }
    }
    $classPrefix: pc-offset-;
    @for $n from 1 through 24 {
      &.#{$classPrefix}#{$n} {
        margin-left: $n / 24 * 100%;
      }
    }
  }
  @media (min-width: 1200px) {
    $classPrefix: bigPc-col-;
    @for $n from 1 through 24 {
      &.#{$classPrefix}#{$n} {
        width: $n / 24 * 100%;
      }
    }
    $classPrefix: bigPc-offset-;
    @for $n from 1 through 24 {
      &.#{$classPrefix}#{$n} {
        margin-left: $n / 24 * 100%;
      }
    }
  }
}
</style>
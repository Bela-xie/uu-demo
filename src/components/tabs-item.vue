<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UUTabsItem",
  inject: ["eventBus"],
  data() {
    return {
      active: false
    };
  },
  computed: {
    classes() {
      return { active: this.active };
    }
  },
  props: {
    name: {
      type: [String, Number],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.eventBus.$on("update:selected", name => {
      this.active = this.name === name;
    });
  },
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name);
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs-item {
  padding: 0 1em;
  &.active {
    background-color: red;
  }
}
</style>

<template>
  <div class="tabs-pane" :class="classes" @click="xxx" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "UUTabsPane",
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
  created() {
    this.eventBus.$on("update:selected", name => {
      this.active = this.name === name;
    });
  },
  props: {
    name: {
      type: [String, Number],
      required: true
    }
  },
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name);
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs-pane {
  &.active {
    background-color: red;
  }
}
</style>

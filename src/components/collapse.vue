<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  props: {
    single: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return { eventBus: this.eventBus };
  },
  methods: {
    listenAddSelected() {
      this.eventBus.$on("update:addSelected", (name) => {
        let selectedCopy = JSON.parse(JSON.stringify(this.selected));
        if (this.single) {
          selectedCopy = [name];
        } else {
          selectedCopy.push(name);
        }
        this.eventBus.$emit("update:selected", selectedCopy);
        this.$emit("update:selected", selectedCopy);
      });
    },
    listenRemoveSelected() {
      this.eventBus.$on("update:removeSelected", (name) => {
        let selectedCopy = JSON.parse(JSON.stringify(this.selected));
        const index = selectedCopy.indexOf(name);
        selectedCopy.splice(index, 1);
        this.eventBus.$emit("update:selected", selectedCopy);
        this.$emit("update:selected", selectedCopy);
      });
    },
  },
  mounted() {
    this.eventBus.$emit("update:selected", this.selected);
    this.listenAddSelected();
    this.listenRemoveSelected();
  },
};
</script>

<style lang="scss" scoped>
.collapse {
  $gray: #ddd;
  $border-radius: 4px;
  border: 1px solid $gray;
  border-radius: $border-radius;
}
</style>

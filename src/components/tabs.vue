<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "UUTabs",
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  methods: {
    checkChildren() {
      if (this.$children.length === 0) {
        console && console.warn && console.warn("u-tabs下应该有子组件u-head和u-body，但是你并没有写子组件");
      }
    },
    selectTab() {
      this.$children.forEach((vm) => {
        if (vm.$options.name === "UUTabsHead") {
          vm.$children.forEach((childVm) => {
            if (childVm.name === this.selected && childVm.$options.name === "UUTabsItem") {
              this.eventBus.$emit("update:selected", this.selected, childVm);
            }
          });
        }
      });
    },
  },
  mounted() {
    this.checkChildren();
    this.selectTab();
  },
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: "horizontal",
      validater(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs {
}
</style>

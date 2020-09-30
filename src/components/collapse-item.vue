<template>
  <div class="collapseItem">
    <div class="title" @click="toggle">{{ title }}</div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  inject: ["eventBus"],
  data() {
    return {
      open: false,
    };
  },
  created() {
    this.eventBus &&
      this.eventBus.$on("update:selected", (names) => {
        if (names.indexOf(this.name) >= 0) {
          this.open = true;
        } else {
          this.open = false;
        }
      });
  },
  methods: {
    toggle() {
      if (this.open === false) {
        this.eventBus.$emit("update:addSelected", this.name);
      } else {
        this.eventBus.$emit("update:removeSelected", this.name);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.collapseItem {
  $gray: #ddd;
  $border-radius: 4px;
  > .title {
    border: 1px solid $gray;
    min-height: 35px;
    display: flex;
    align-items: center;
    padding: 0px 8px;
    margin: -1px;
  }
  > .content {
    padding: 8px;
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
}
</style>

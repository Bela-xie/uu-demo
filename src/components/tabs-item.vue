<template>
  <div class="tabs-item" @click="onClick" :class="classes">
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
      return { active: this.active, disabled: this.disabled };
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
    console.log(this.disabled);
    this.eventBus.$on("update:selected", name => {
      this.active = this.name === name;
    });
  },
  methods: {
    onClick() {
      if(this.disabled){return}
      this.eventBus.$emit("update:selected", this.name, this);
    }
  }
};
</script>

<style lang="scss" scoped>
$blue: blue;
$disabled-color:gray;
.tabs-item {
  padding: 0 1em;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  &.active {
    color: $blue;
    font-weight: bold;
  }
  &.disabled{
    color: $disabled-color;
  }
}
</style>

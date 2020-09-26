<template>
  <div class="popover" @click="onClick" ref="popOver">
    <div class="content-wrapper" ref="contentWrapper" v-if="visible" :class="{ [`position-${position}`]: true }">
      <slot name="content"></slot>
    </div>
    <div class="triggerWrapper" ref="triggerWrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "left", "right", "bottom"].indexOf(value) >= 0;
      },
    },
  },
  methods: {
    showContent() {
      //放在body后面的原因是防止外部的父元素使用了overflow:hidden将内容隐藏掉了
      document.body.appendChild(this.$refs.contentWrapper);
      const triggerWrapper = this.$refs.triggerWrapper;
      const contentWrapper = this.$refs.contentWrapper;
      const { height: height2 } = contentWrapper.getBoundingClientRect();
      const { left, top, width, height } = triggerWrapper.getBoundingClientRect();
      //getBoundingClientRect得到的数据是相对于窗口的位置，而不是相对于body，所以要加上window.scrollX和window.scrollY
      if (this.position === "top") {
        contentWrapper.style.left = window.scrollX + left + "px";
        contentWrapper.style.top = window.scrollY + top + "px";
      } else if (this.position === "bottom") {
        contentWrapper.style.left = window.scrollX + left + "px";
        contentWrapper.style.top = window.scrollY + height + top + "px";
      } else if (this.position === "left") {
        contentWrapper.style.left = window.scrollX + left + "px";
        contentWrapper.style.top = window.scrollY + top + (height - height2) / 2 + "px";
      } else {
        contentWrapper.style.left = window.scrollX + width + left + "px";
        contentWrapper.style.top = window.scrollY + top + (height - height2) / 2 + "px";
      }
    },
    eventHandler(e) {
      if (this.$refs.triggerWrapper.contains(e.target) || (this.$refs.contentWrapper && this.$refs.contentWrapper.contains(e.target))) {
        return;
      }
      this.close();
    },
    close() {
      this.visible = false;
      document.removeEventListener("click", this.eventHandler);
    },
    open() {
      this.visible = true;
      this.$nextTick(() => {
        this.showContent();
      });
      document.addEventListener("click", this.eventHandler);
    },
    onClick() {
      if (this.visible === true) {
        this.close();
      } else {
        this.open();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.popover {
  margin-top: 300px;
  display: inline-block;
  padding: 10px;
  vertical-align: top;
  position: relative;
  //   border: 1px solid red;
}
.content-wrapper {
  // border: 1px solid green;
  $border-color: #333;
  $border-radius: 4px;
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  padding: 0.5em 1em;
  max-width: 15em;
  word-break: break-all;
  background-color: white;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  &::before,
  &::after {
    position: absolute;
    display: block;
    width: 0px;
    height: 0px;
    content: "";
    border: 10px solid transparent;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before {
      left: 10px;
      top: 100%;
      border-top-color: black;
    }
    &::after {
      left: 10px;
      top: calc(100% - 1px);
      border-top-color: white;
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before {
      left: 10px;
      bottom: 100%;
      border-bottom-color: black;
    }
    &::after {
      bottom: calc(100% - 1px);
      left: 10px;
      border-bottom-color: white;
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before {
      top: 50%;
      transform: translateY(-50%);
      left: 100%;
      border-left-color: black;
    }
    &::after {
      transform: translateY(-50%);
      top: 50%;
      left: calc(100% - 1px);
      border-left-color: white;
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before {
      top: 50%;
      transform: translateY(-50%);
      right: 100%;
      border-right-color: black;
    }
    &::after {
      top: 50%;
      transform: translateY(-50%);
      right: calc(100% - 1px);
      border-right-color: white;
    }
  }
}
</style>

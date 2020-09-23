<template>
  <div class="toast" ref="toast">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <span class="line" v-if="closeButton" ref="line"></span>
    <span @click="onClickClose" class="close" v-if="closeButton">{{closeButton.text}}</span>
  </div>
</template>

<script>
export default {
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 50
    },
    closeButton: {
      type: Object
      //   default() {
      //     return {
      //       text: "知道了",
      //       callback: undefined
      //     };
      //   }
    },
    enableHtml: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.updateStyle();
    this.execAutoClose();
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    updateStyle() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.toast.getBoundingClientRect().height
        }px`;
      });
    },
    close() {
      this.$el.remove();
      this.$destroy();
    },
    log() {
      console.log("hello");
    },
    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function")
        this.closeButton.callback(this);
    }
  }
};
</script>

<style lang="scss" scoped>
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$font-size: 14px;
.toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  min-height: $toast-min-height;
  background-color: $toast-bg;
  padding: 0 16px;
  color: white;
  display: flex;
  align-items: center;
  font-size: $font-size;
  box-shadow: 0 0 3px 0 rgba($color: #000000, $alpha: 0.5);
  border-radius: 4px;
  line-height: 1.8;
  > .message {
    padding: 4px 0;
  }
  > .close {
    padding-left: 16px;
    flex-shrink: 0;
  }
  > .line {
    border-left: 1px solid #666;
    margin-left: 16px;
  }
}
</style>
<template>
  <div class="popover" @click="onClick" ref="popOver">
    <div class="content-wrapper" ref="contentWrapper" v-if="visible">
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
  methods: {
    showContent() {
      //放在body后面的原因是防止外部的父元素使用了overflow:hidden将内容隐藏掉了
      document.body.appendChild(this.$refs.contentWrapper);
      const { left, top } = this.$refs.triggerWrapper.getBoundingClientRect();
      //getBoundingClientRect得到的数据是相对于窗口的位置，而不是相对于body，所以要加上window.scrollX和window.scrollY
      this.$refs.contentWrapper.style.left = window.scrollX + left + "px";
      this.$refs.contentWrapper.style.top = window.scrollY + top + "px";
    },
    eventHandler(e) {
      if (this.$refs.triggerWrapper.contains(e.target) || (this.$refs.contentWrapper && this.$refs.contentWrapper.contains(e.target))) {
        return;
      }
      console.log("eventHandler");
      this.close();
    },
    close() {
      console.log("关闭");
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
      console.log("onclick");
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
  position: absolute;
  border: 1px solid red;
  box-shadow: 0 0 3px rgba($color: #000000, $alpha: 0.5);
  transform: translateY(-100%);
}
</style>

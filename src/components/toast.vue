<template>
  <div class="toast">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$toast-height: 30px;
$toast-bg: rgba(0, 0, 0, 0.75);
$font-size: 14px;
.toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: $toast-height;
  background-color: $toast-bg;
  padding: 0 10px;
  color: white;
  display: flex;
  align-items: center;
  font-size: $font-size;
}
</style>
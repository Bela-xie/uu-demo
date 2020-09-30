---
title:’Layout - 布局‘
---

# 布局


## 预览
<br/>
<ClientOnly>
  <layout-demo/>
</ClientOnly>

## 代码
```vue
<template>
  <div class="wrapper">
    <u-layout>
      <u-header> header </u-header>
      <u-content> content </u-content>
      <u-footer> footer </u-footer>
    </u-layout>
    <br />
    <u-layout>
      <u-header> header </u-header>
      <u-layout>
        <u-sider> sider </u-sider>
        <u-content> content </u-content>
      </u-layout>
      <u-footer> footer </u-footer>
    </u-layout>
    <br />
    <u-layout>
      <u-header> header </u-header>
      <u-layout>
        <u-sider> sider </u-sider>
        <u-layout>
          <u-content> content </u-content>
          <u-footer> footer </u-footer>
        </u-layout>
      </u-layout>
    </u-layout>
  </div>
</template>
<style lang="scss" scoped>
$background-color: #3eaf7c;
.layout {
  overflow: hidden;
  height: 30vh;
  > .header {
    background-color: $background-color;
    height: 20%;
  }
  > .content {
    background-color: lighten($background-color, 40%);
  }
  > .sider {
    width: 100px;
    background-color: lighten($background-color, 20%);
  }
  > .footer {
    background-color: $background-color;
  }
  > .layout {
    height: 20vh;
    > .layout {
      height: 100%;
    }
  }
}
</style>
```

## 选项说明

各个组件只提供基础布局，样式需要自定义。组件的使用方法如下：

**1.`<u-layout>`：**

布局容器。可以嵌套`<u-header>`、`<u-content>`、`<u-footer>`、`<u-sider>` 以及 `<u-layout>`自身，当嵌套有`<u-sider>` 的时候，里面的内容将变成横向布局。

**2.`<u-header>`：**

顶部区域。可以嵌套任何内容，只能放在`<u-layout>`中。

**3.`<u-content>`：**

内容区域。可以嵌套任何内容，只能放在`<u-layout>`中。

**4.`<u-footer>`：**

底部区域。可以嵌套任何内容，只能放在`<u-layout>`中。

**5.`<u-sider>`：**

侧边区域。可以嵌套任何内容，只能放在`<u-layout>`中。
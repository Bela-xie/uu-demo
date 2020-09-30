---
title:’Grid - 栅格系统‘
---

# 栅格系统

UU 框架提供了一套响应式、移动设备优先的栅格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多24列。

## 预览
<ClientOnly>
  <grid-demo/>
</ClientOnly>

## 代码
```vue
<u-row>
  <u-col span="4">span:4</u-col>
  <u-col span="4">span:4</u-col>
  <u-col span="4">span:4</u-col>
  <u-col span="4">span:4</u-col>
  <u-col span="4">span:4</u-col>
  <u-col span="4">span:4</u-col>
</u-row>
<u-row>
  <u-col span="6">span:6</u-col>
  <u-col span="6">span:6</u-col>
  <u-col span="6">span:6</u-col>
  <u-col span="6">span:6</u-col>
</u-row>
<u-row>
  <u-col span="8">span:8</u-col>
  <u-col span="8">span:8</u-col>
  <u-col span="8">span:8</u-col>
</u-row>
<u-row>
  <u-col span="12">span:12</u-col>
  <u-col span="12">span:12</u-col>
</u-row>
<u-row>
  <u-col span="24">span:24</u-col>
</u-row>

<style lang="scss" scoped>
.col {
  box-sizing: border-box;
  height: 10vh;
  border: 1px solid rgb(196, 189, 189);
  background-color: #3eaf7c;
  color: white;
}
</style>
```

## 选项说明

### Row 选项

**1. gutter**

数值类型。用于设置一行中相邻两列的内容之间的空隙，默认值为0。

**预览**

<ClientOnly>
  <grid-gutter-demo/>
</ClientOnly>

**代码**

```vue
<template>
  <div>
    <u-row gutter="20">
      <u-col span="6"><span>span:6;gutter:20</span></u-col>
      <u-col span="6"><span>span:6;gutter:20</span></u-col>
      <u-col span="6"><span>span:6;gutter:20</span></u-col>
      <u-col span="6"><span>span:6;gutter:20</span></u-col>
    </u-row>
  </div>
</template>
<style lang="scss" scoped>
.col {
  box-sizing: border-box;
  > span {
    text-align: center;
    background-color: #3eaf7c;
    display: block;
    color: white;
  }
}
</style>

```

**2. align**

字符串类型。用于设置一行中的各列在主轴上的对齐方式，仅支持 left 、 center 、 right 。

**预览**

<ClientOnly>
  <grid-align-demo/>
</ClientOnly>

**代码**

```vue
<template>
  <div>
    <u-row align="left">
      <u-col span="6">left</u-col>
      <u-col span="6">left</u-col>
      <u-col span="6">left</u-col>
    </u-row>
    <u-row align="center">
      <u-col span="6">center</u-col>
      <u-col span="6">center</u-col>
      <u-col span="6">center</u-col>
    </u-row>
    <u-row align="right">
      <u-col span="6">right</u-col>
      <u-col span="6">right</u-col>
      <u-col span="6">right</u-col>
    </u-row>
  </div>
</template>
<style lang="scss" scoped>
.col {
  box-sizing: border-box;
  height: 10vh;
  border: 1px solid rgb(196, 189, 189);
  background-color: #3eaf7c;
  color: white;
}
</style>
```

### Col 选项

**1. span**

数值类型。用于设置该列在一行中所占的列数，在本框架的栅格系统中，每一行均分为24列，通过设置 span 来表示该列在相应的行中跨越的范围。

**2.offset**

数值类型。用于设置该列向右侧偏移的列数。

**预览**

<ClientOnly>
  <grid-offset-demo/>
</ClientOnly>

**代码**

```vue
<template>
  <div>
    <u-row align="left">
      <u-col span="6">span:6</u-col>
      <u-col span="6" offset="6">span:6，offset:6（向右偏移6列）</u-col>
      <u-col span="6">span:6</u-col>
    </u-row>
  </div>
</template>
<style lang="scss" scoped>
.col {
  box-sizing: border-box;
  height: 10vh;
  border: 1px solid rgb(196, 189, 189);
  background-color: #3eaf7c;
  color: white;
}
</style>

```

**3.支持响应式布局**

同其它框架一样，本栅格系统也支持响应式布局。对应的属性有 ipad 对象、 smallPc 对象、 pc 对象、 bigPc 对象。这四个属性都是对象类型，内部支持 span 和 offset 两个属性，分别表示在对应的屏幕上该列所占一行的列数以及向右的偏移量。各个对象所对应的屏幕宽度如下表所示。默认为手机屏幕，同时坚持以移动端优先的布局，也就是说当未指定在某设备上的布局时，会向已指定的设备中较小的设备为准。

| 对象     | 默认                  | ipad      | smallPc   | pc        | bigPc      |
| -------- | :-------------------- | :-------- | :-------- | :-------- | :--------- |
| 屏幕宽度 | 小于576px（手机屏幕） | 大于576px | 大于768px | 大于992px | 大于1200px |

**预览**

读者可自行缩放屏幕查看，当屏幕宽度小于 576px 时每一行只显示一列，当屏幕宽度大于 576px 每一行显示两列，当屏幕宽度大于 992px 时每一行显示四列。

<ClientOnly>
  <grid-response-demo/>
</ClientOnly>

**代码**

```vue
<template>
  <div>
    <u-row align="left">
      <u-col span="24" :ipad="{ span: 12 }" :pc="{ span: 6 }">
        ipone-span:24；ipad-span:12；pc-span:6
      </u-col>
      <u-col span="24" :ipad="{ span: 12 }" :pc="{ span: 6 }">
        ipone-span:24；ipad-span:12；pc-span:6
      </u-col>
      <u-col span="24" :ipad="{ span: 12 }" :pc="{ span: 6 }">
        ipone-span:24；ipad-span:12；pc-span:6
      </u-col>
      <u-col span="24" :ipad="{ span: 12 }" :pc="{ span: 6 }">
        ipone-span:24；ipad-span:12；pc-span:6
      </u-col>
    </u-row>
  </div>
</template>
<style lang="scss" scoped>
.col {
  box-sizing: border-box;
  height: 10vh;
  border: 1px solid rgb(196, 189, 189);
  background-color: #3eaf7c;
  color: white;
}
</style>
```

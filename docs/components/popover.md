---
title:’Popover - 弹出层‘
---

# 弹出层

## 点击弹出

### 预览
<br/>
<ClientOnly>
  <popover-demo/>
</ClientOnly>

### 代码
```vue
<u-popover>
  <u-button>上方弹出</u-button>
  <template slot="content">
    弹出内容
  </template>
</u-popover>
<u-popover position="bottom">
  <u-button>下方弹出</u-button>
  <template slot="content">
    弹出内容
  </template>
</u-popover>
<u-popover position="left">
  <u-button>左边弹出</u-button>
  <template slot="content">
    弹出内容
  </template>
</u-popover>
<u-popover position="right">
  <u-button>右边弹出</u-button>
  <template slot="content">
    弹出内容
  </template>
</u-popover>
```
## hover 弹出

### 预览
<br/>
<ClientOnly>
  <popover-hover-demo/>
</ClientOnly>

### 代码
```vue
<u-popover trigger="hover">
  <u-button>上方弹出</u-button>
  <template slot="content">
    弹出内容
  </template>
</u-popover>
<u-popover position="bottom" trigger="hover">
  <u-button>下方弹出</u-button>
  <template slot="content">
    弹出内容
  </template>
</u-popover>
<u-popover position="left" trigger="hover">
  <u-button>左边弹出</u-button>
  <template slot="content">
    弹出内容
  </template>
</u-popover>
<u-popover position="right" trigger="hover">
  <u-button>右边弹出</u-button>
  <template slot="content">
    弹出内容
  </template>
</u-popover>
```

## 选项说明

**1. position**

用于设置弹出内容出现的方向，支持 left 、 right 、 top 、 bottom ，默认值为 top 。

**2. trigger**

用于设置弹出的方式，支持 click 、 hover ，值为 click 时表示用点击的方式弹出，为 hover 时表示鼠标悬浮的时候弹出，默认为 click。

**3. 弹出内容支持 HTML 语法**
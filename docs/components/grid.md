---
title:’Grid - 栅格系统‘
---

# 栅格系统


## 预览
<br/>
<ClientOnly>
  <button-demo/>
</ClientOnly>

## 代码
```vue
<u-button>默认按钮</u-button>
<u-button icon="setting">默认按钮</u-button>
<u-button :loading="true">默认按钮</u-button>
<u-button disabled>默认按钮</u-button>
<u-button icon="setting" iconPosition="right">默认按钮</u-button>
```

## 选项说明

**1. icon 和 iconPosition**

属性 icon 用于设置按钮内的 svg 图标，属性 iconPosition 用于设置图标显示的位置，仅支持 left 和 right。

**2. loading**

布尔类型。为 true 时显示加载中的图标， false 时不显示加载中的图标。

**3. disabled**

是否禁用，存在时则显示按钮为禁用状态，不存在时则正常显示。

## 按钮组

### 预览
<br/>
<ClientOnly>
  <button-group-demo/>
</ClientOnly>

### 代码
```vue
<u-button-group>
  <u-button icon="left">上一页</u-button>
  <u-button>更多</u-button>
  <u-button icon="right" icon-position="right">下一页</u-button>
</u-button-group>
```

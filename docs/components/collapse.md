---
title:'Collapse - 折叠面板'
---

# 折叠面板

## 预览
<br/>
<ClientOnly>
  <collapse-demo/>
</ClientOnly>

## 代码
```vue
<template>
  <div>
    <u-collapse :selected.sync="selected">
      <u-collapse-item title="标题1" name="1">内容1</u-collapse-item>
      <u-collapse-item title="标题2" name="2">内容2</u-collapse-item>
      <u-collapse-item title="标题3" name="3">内容3</u-collapse-item>
    </u-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return { selected: ["1"] };
  },
};
</script>
```

## 选项说明

**1. selected**

数组类型，数组中的值应该为 name 属性中的值，用于设置默认展开的内容，如果不设置的话，默认为空数组。

**2. title**

必设项，用于设置标题中的内容。

**3. name**

必设项，用于指定每一项，相当于每一项的 key。

## single 设置

在 `<u-collapse>` 上加上 single ，表示只能同时选中一项内容。

### 预览
<br/>
<ClientOnly>
  <collapse-single-demo/>
</ClientOnly>

### 代码
```vue
<template>
  <div>
    <u-collapse :selected.sync="selected" single>
      <u-collapse-item title="标题1" name="1">内容1</u-collapse-item>
      <u-collapse-item title="标题2" name="2">内容2</u-collapse-item>
      <u-collapse-item title="标题3" name="3">内容3</u-collapse-item>
    </u-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return { selected: ["1"] };
  },
};
</script>
```

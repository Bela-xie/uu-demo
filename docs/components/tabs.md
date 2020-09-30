---
title:`Tab - 标签`
---

# 标签

## 预览
<br/>
<ClientOnly>
  <tabs-demo/>
</ClientOnly>

## 代码
```vue
<script>
export default {
  data() {
    return {
      selectedTag: "tab1",
    };
  }
};
</script>

<u-tabs :selected.sync="selectedTag">
  <u-tabs-head>
    <u-tabs-item name="tab1">
      <u-icon name="setting"></u-icon>
      1
    </u-tabs-item>
    <u-tabs-item name="tab2">2</u-tabs-item>
    <u-tabs-item name="tab3">3</u-tabs-item>
    <u-tabs-item name="tab4" disabled>4</u-tabs-item>
  </u-tabs-head>
  <u-tabs-body>
    <u-tabs-pane name="tab1">tab 1</u-tabs-pane>
    <u-tabs-pane name="tab2">tab 2</u-tabs-pane>
    <u-tabs-pane name="tab3">tab 3</u-tabs-pane>
    <u-tabs-pane name="tab4">tab 4</u-tabs-pane>
  </u-tabs-body>
</u-tabs>

```

## 选项说明

**1. name**

必设选项。用于设置每个标签的名字，在`<u-tabs-item>`和`<u-tabs-pane>`上设置，且两者必须一一对应。

**2. selected**

必设选项。用于表示选中的标签，在`<u-tabs>`上设置,值应该为 name 属性中的值。

**3. disabled**

可选选项。用于表示是否禁用某个标签，若要禁用某个标签，在对应的`<u-tabs-item>`上加上 disabled 即可。

**4. 支持在`<u-tabs-item>`标签中插入图标**

例如：`  <u-tabs-item name="woman"><u-icon name="setting"></u-icon>tab1</u-tabs-item>`

**5. 在`<u-tabs-head>`标签中使用`<template>`标签**

使用的时候必须在`<template>`标签中设置 slot="actions"，否则无效。正常使用后可以在 `<u-tabs-head>` 内容中加入其他样式的内容，示例如下：
```vue
<u-tabs-head>
   <template slot="actions">
       <button>设置</button>
   </template>
</u-tabs-head>
```

## 注意：

**`<u-tabs-head>`标签内必须使用`<u-tabs-item>`，`<u-tabs-body>`标签内必须使用`<u-tabs-pane>`，否则将出现警告。**
---
title:’Input - 输入框‘
---

# 输入框


## 预览
<br/>
<ClientOnly>
  <input-demo/>
</ClientOnly>

## 代码
```vue
<u-input></u-input>
<u-input disabled></u-input>
<u-input readonly></u-input>
<u-input error="错误信息"></u-input>
<u-input v-model="value"></u-input><span>{{ value }}</span>
```

## 选项说明

**1. error**

设置后输入框变成显示错误信息的状态，该属性的值即为显示的错误信息的内容。

**3. readonly**

是否为只读的状态，存在时则显示输入框为只读状态，不存在时则正常显示。

**3. disabled**

是否禁用，存在时则显示输入框为禁用状态，不存在时则正常显示。

**4. 支持 v-model 双向绑定**

预览：
<br/>
<ClientOnly>
  <input-vModel-demo/>
</ClientOnly>

代码：
```vue
<u-input v-model="value"></u-input>
<span>value:&nbsp;{{ value }}</span>

<script>
export default {
  data() {
    return {
      value: "",
    }
  }
};
</script>
```
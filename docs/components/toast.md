---
title:’Toast - 弹出提示框‘
---

# 弹出提示框

## 控制出现位置

### 预览
<br/>
<ClientOnly>
  <toast-demo/>
</ClientOnly>

### 代码
```vue
<template>
<u-button @click="$toast('我是 toast 内容', { position: 'top', zIndex: 20 })">
  上方弹出
</u-button>
<u-button @click="$toast('我是 toast 内容', { position: 'middle', zIndex: 20 })">
  中间弹出
</u-button>
<u-button @click="$toast('我是 toast 内容', { position: 'bottom', zIndex: 20 })">
  下方弹出
</u-button>
</template>
<script>
import Button from "../../../src/components/button.vue";
import plugin from "../../../src/plugin.js";
import Vue from "vue";
Vue.use(plugin);
export default {
  components: {
    "u-button": Button,
  }
};
</script>
```

## 显示关闭按钮

### 预览
<br/>
<ClientOnly>
  <toast-closeButton-demo/>
</ClientOnly>

### 代码
```vue
<template>
  <div>
    <u-button @click="onAutoClose">
      3秒钟后自动关闭
    </u-button>
    <u-button @click="onClickClose">
      点击按钮关闭弹出内容
    </u-button>
  </div>
</template>
<script>
import Button from "../../../src/components/button.vue";
import plugin from "../../../src/plugin.js";
import Vue from "vue";
Vue.use(plugin);
export default {
  components: {
    "u-button": Button,
  },
  methods: {
    onAutoClose() {
      this.$toast("我是 Toast 内容", {
        position: "top",
        autoClose: 3,
        closeButton: {
          text: "关闭",
          callback: () => {
            console.log("关闭后可执行该回调函数");
          },
        },
      });
    },
    onClickClose() {
      this.$toast("我是 Toast 内容", {
        position: "top",
        autoClose: false, //不支持自动关闭
        closeButton: {
          text: "关闭",
          callback: () => {
            console.log("关闭后可执行该回调函数");
          },
        },
      });
    },
  },
};
</script>
```

## 支持 HTML 语法

### 预览
<br/>
<ClientOnly>
  <toast-HTML-demo/>
</ClientOnly>

### 代码
```vue
<template>
  <div>
    <u-button @click="onAutoClose">
      3秒钟后自动关闭
    </u-button>
  </div>
</template>
<script>
import Button from "../../../src/components/button.vue";
import plugin from "../../../src/plugin.js";
import Vue from "vue";
Vue.use(plugin);
export default {
  components: {
    "u-button": Button,
  },
  methods: {
    onAutoClose() {
      this.$toast("我是 Toast 内容，<a href='http://www.baidu.com'>百度</a>", {
        enableHtml: true,
        position: "top",
        autoClose: 3,
        closeButton: {
          text: "关闭",
          callback: () => {
            console.log("关闭后可执行该回调函数");
          },
        },
      });
    },
  },
};
</script>
```

## 使用说明

该组件与其他组件使用方式不同，并不能直接导入 toast 组件，而是需要导入一个 plugin 插件，然后使用 Vue 官方文档中使用该插件的方式引用，也就是使用 Vue.use 方法，最后在需要引用的地方直接使用 $toast 方法。步骤如下：（事实上，通过Vue.use 引用后 $toast 方法就会存在 Vue 的原型上。）

**1.导入 Vue 和 plugin**

**2.运用 use 调用 plugin：Vue.use(plugin)**

**3.使用 $toast 方法，该方法接受两个参数，分别是 message 和 toastOptions， message 用于设置弹出提示框显示的内容， toastOptions 用于设置 toast 组件中的一些选项设置，选项说明见下。**

## 选项说明

**1. autoClose**

值的类型为布尔或数值，用于设置是否自动关闭，值为 false 时表示不自动关闭，不接受 true 值，若要表示自动关闭需要传入一个正整数，表示多少秒之后自动关闭，请注意单位为秒，默认值为 5 。

**2. position**

用于设置弹出内容出现的位置，仅支持 top 、 middle 、 bottom ，默认值为 top 。

**3. enableHtml**

布尔类型。表示弹出的内容是否支持 HTML 语法，当为 true 时表示支持 HTML 语法，可以在定义弹出内容的时候写 HTML 标签，为 false 时则表示不支持 HTML 语法，此时弹出内容中的所有内容仅显示为普通的文本。默认为 false。

**4. closeButton**

值为对象类型，使用该属性时必须在对象内定义 text 和 callback 两个属性，text 接受字符串类型，用于设置关闭按钮显示的内容， callback 接受一个函数，用于定义点击关闭按钮后执行的函数。不定义 closeButton 属性时表示不显示关闭按钮。

**5. zIndex**

用于定义弹出内容的 z-index 样式，避免在一些情况下由于堆叠上下文的层叠问题导致无法显示弹出内容的问题。
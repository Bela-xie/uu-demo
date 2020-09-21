//测试 icon 属性  各个测试之间使用代码块的原因是做 作用域隔离，不用 {} 的话，那么同样的命名就会产生冲突，比如 Constructor
// {
//   const Constructor = Vue.extend(Button);
//   const vm = new Constructor({
//     propsData: {
//       //用 props 没有用
//       icon: "setting",
//     },
//   });
//   vm.$mount(); //挂载到内存里面
//   const useElement = vm.$el.querySelector("use");
//   const xlink = useElement.getAttribute("xlink:href");
//   expect(xlink).to.eq("#icon-setting");
//   vm.$el.remove();
//   vm.$destroy();
// }
// //测试 loading 属性
// {
//   const Constructor = Vue.extend(Button);
//   const vm = new Constructor({
//     propsData: {
//       //用 props 没有用
//       icon: "setting",
//       loading: true,
//     },
//   });
//   vm.$mount();
//   const useElement = vm.$el.querySelector("use");
//   const xlink = useElement.getAttribute("xlink:href");
//   expect(xlink).to.eq("#icon-loading");
//   vm.$el.remove();
//   vm.$destroy();
// }
// //测试 iconPosition 属性
// {
//   const Constructor = Vue.extend(Button);
//   const vm = new Constructor({
//     propsData: {
//       //用 props 没有用
//       icon: "setting",
//       iconPosition: "right",
//     },
//   });
//   vm.$mount("#test");
//   const span = vm.$el.querySelector("span");
//   const {
//     order
//   } = window.getComputedStyle(span);
//   expect(order).to.eq("2");
//   vm.$el.remove();
//   vm.$destroy();
// }
// // 运用 chai-spies 测试点击事件
// {
//   const div = document.createElement("div");
//   document.body.appendChild(div);
//   const Constructor = Vue.extend(Button);
//   const vm = new Constructor({
//     propsData: {
//       //用 props 没有用
//       icon: "setting",
//     },
//   });
//   vm.$mount(div);
//   let spy = chai.spy(function () {});

//   vm.$on("click", spy);
//   // 希望这个函数被执行
//   let button = vm.$el;
//   button.click(); //触发点击事件
//   expect(spy).to.have.been.called();
//   vm.$el.remove();
//   vm.$destroy();
// }
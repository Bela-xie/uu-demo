import Toast from "./components/toast.vue"
export default {
    install(Vue, options) {
        Vue.prototype.$toast = (message) => {
            const Constructor = Vue.extend(Toast);
            const vm = new Constructor();
            //必须在$mount之前设置$slots，否则$slots为空
            vm.$slots.default = [message];
            vm.$mount();
            document.body.appendChild(vm.$el);
        }
    }
}
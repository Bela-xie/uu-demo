import Toast from "./components/toast.vue";

function createToast({Vue, message, propsData, onClose}) {
    const Constructor = Vue.extend(Toast);
    const vm = new Constructor({
        propsData
    });
    //必须在$mount之前设置$slots，否则$slots为空
    vm.$slots.default = [message];
    //如果$mount没有传入任何参数的话，那么vm会被挂载为页面之外的元素，此时getBoundingClientRect()的值都为0
    vm.$mount();
    vm.$on("close", onClose);
    document.body.appendChild(vm.$el);
    return vm;
}
let currentToast;
export default {
    install(Vue, options) {
        Vue.prototype.$toast = (message, toastOptions) => {
            if (currentToast) {
                currentToast.close();
            }
            currentToast = createToast({
                Vue,
                message,
                propsData: toastOptions,
                onClose: () => {
                    currentToast = null;
                }
            });

        };
    }
};





















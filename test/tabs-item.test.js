const expect = chai.expect;
import Vue from "vue";
import TabsItem from "../src/components/tabs-item.vue";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("TabsItem", () => {
    it("存在.", () => {
        expect(TabsItem).to.exist;
    });
    it("name", () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                name: "xxx"
            }
        }).$mount();
        expect(vm.$el.getAttribute("data-name")).to.eq("xxx")
    })
    it("disabled", () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                disabled: false
            }
        }).$mount();
        // expect(vm.$el.classList.contains("disabled")).to.be.false;
        const callback = sinon.fake();
        vm.$on("click", callback)
        vm.$el.click();
        expect(callback).have.been.called;
    })
});
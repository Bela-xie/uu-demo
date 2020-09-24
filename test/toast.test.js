const expect = chai.expect;
import Vue from 'vue';
import Toast from '../src/components/toast';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Toast', () => {

    it('存在.', () => {
        expect(Toast).to.exist; //不是 falsy 值就不报错
    });
    it('autoClose', (done) => {
        // this.timeout("1200")  可以设置最大限制的时间
        const div = document.createElement("div");
        document.body.appendChild(div);
        const Constructor = Vue.extend(Toast);
        const vm = new Constructor({
            propsData: {
                autoClose: 1
            }
        }).$mount(div);
        vm.$on("close", () => {
            expect(document.body.contains(vm.$el)).to.eq(false);
            done();
        });
    });
    it("closeButton", () => {
        const callback = sinon.fake();
        const Constructor = Vue.extend(Toast);
        const vm = new Constructor({
            propsData: {
                closeButton: {
                    text: "关闭吧",
                    callback
                }
            }
        }).$mount();
        const closeButton = vm.$el.querySelector(".close");
        expect(closeButton.textContent.trim()).to.eq("关闭吧");
        closeButton.click();
    });
    it("enableHtml", () => {
        const Constructor = Vue.extend(Toast);
        const vm = new Constructor({
            propsData: {
                enableHtml: true
            }
        });
        vm.$slots.default = ["<strong id='test'>hi</strong>"];
        vm.$mount();//mount必须放在 $slots.default后面，如果放在前面的话，那么 $slots.default中的内容就不会再mount上去了
        expect(vm.$el.querySelector('#test')).to.exist;
    });
    it("position", () => {
        const Constructor = Vue.extend(Toast);
        const vm = new Constructor({
            propsData: {
                position: "middle"
            }
        }).$mount();
        expect(vm.$el.classList.contains("position-middle")).to.eq(true);
    });
});
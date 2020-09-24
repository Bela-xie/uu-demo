const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/components/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {

    // it 的作用就相当于之前写测试时的代码块，将各个测试之间隔离开，第一个参数自定义，给测试起名字，就相当于之前写注释一样
    it('存在.', () => {
        expect(Input).to.exist; //不是 falsy 值就不报错
    })
    describe("test events", () => {
        const Constructor = Vue.extend(Input);
        let vm;
        afterEach(function () {
            vm.$destroy();
        })
        it("change,input,blur,focus", () => {
            ['change', 'input', 'blur', 'focus'].forEach(eventName => {
                const event = new Event(eventName);
                vm = new Constructor().$mount();
                const callback = sinon.fake();
                vm.$on(eventName, callback);
                Object.defineProperty(
                    event, 'target', {
                        value: {
                            value: 'hi'
                        },
                        enumerable: true
                    }
                )
                const inputElement = vm.$el.querySelector("input");
                inputElement.dispatchEvent(event);
                expect(callback).to.have.been.calledWith('hi');
            })
        })
    })
    describe('test Props', () => {
        const Constructor = Vue.extend(Input);
        let vm;
        afterEach(function () {
            vm.$destroy();
        })
        it('value', () => {
            vm = new Constructor({
                propsData: {
                    value: '王麻子'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('王麻子')
        })
        it('disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount();
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })
        it('readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true);
        })
        it('error', () => {
            vm = new Constructor({
                propsData: {
                    error: "有一个大错误"
                }
            }).$mount()
            const spanElement = vm.$el.querySelector('span');
            const use = vm.$el.querySelector('use')
            expect(use.getAttribute("xlink:href")).to.equal("#icon-error")
            expect(spanElement.innerText).to.equal("有一个大错误")
        })
    });
})
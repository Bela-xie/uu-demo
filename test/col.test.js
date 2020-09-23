const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/components/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {

    it('存在.', () => {
        expect(Col).to.exist;
    })
    it('span', () => {
        const div = document.createElement("div");
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col)
        let vm = new Constructor({
            propsData: {
                span: "1"
            }
        }).$mount(div);
        const rowElement = vm.$el;
        expect(rowElement.classList.contains("col-1")).to.eq(true)
        vm.$el.remove();
        vm.$destroy();
    })
    it('offset', () => {
        const div = document.createElement("div");
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col)
        let vm = new Constructor({
            propsData: {
                offset: "1"
            }
        }).$mount(div);
        const rowElement = vm.$el;
        expect(rowElement.classList.contains("offset-1")).to.eq(true)
        vm.$el.remove();
        vm.$destroy();
    })
    it('ipad', () => {
        const div = document.createElement("div");
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col)
        let vm = new Constructor({
            propsData: {
                ipad: {
                    span: '1',
                    offset: "2"
                }
            }
        }).$mount(div);
        const rowElement = vm.$el;
        expect(rowElement.classList.contains("ipad-col-1")).to.eq(true)
        expect(rowElement.classList.contains("ipad-offset-2")).to.eq(true)
        vm.$el.remove();
        vm.$destroy();
    })
    it('smallPc', () => {
        const div = document.createElement("div");
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col)
        let vm = new Constructor({
            propsData: {
                smallPc: {
                    span: '2',
                    offset: "2"
                }
            }
        }).$mount(div);
        const rowElement = vm.$el;
        expect(rowElement.classList.contains("smallPc-col-2")).to.eq(true)
        expect(rowElement.classList.contains("smallPc-offset-2")).to.eq(true)
        vm.$el.remove();
        vm.$destroy();
    })
    it('pc', () => {
        const div = document.createElement("div");
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col)
        let vm = new Constructor({
            propsData: {
                pc: {
                    span: '2',
                    offset: "2"
                }
            }
        }).$mount(div);
        const rowElement = vm.$el;
        expect(rowElement.classList.contains("pc-col-2")).to.eq(true)
        expect(rowElement.classList.contains("pc-offset-2")).to.eq(true)
        vm.$el.remove();
        vm.$destroy();
    })
    it('bigPc', () => {
        const div = document.createElement("div");
        document.body.appendChild(div);
        const Constructor = Vue.extend(Col)
        let vm = new Constructor({
            propsData: {
                bigPc: {
                    span: '2',
                    offset: "2"
                }
            }
        }).$mount(div);
        const rowElement = vm.$el;
        expect(rowElement.classList.contains("bigPc-col-2")).to.eq(true)
        expect(rowElement.classList.contains("bigPc-offset-2")).to.eq(true)
        vm.$el.remove();
        vm.$destroy();
    })
});
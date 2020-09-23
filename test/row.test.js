const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/components/row'
import Col from '../src/components/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {

    it('存在.', () => {
        expect(Row).to.exist;
    })
    it('gutter', (done) => {
        const div = document.createElement("div");
        document.body.appendChild(div);
        Vue.component('u-row', Row);
        Vue.component('u-col', Col);
        div.innerHTML = `
            <u-row gutter="20">
                <u-col>1</u-col>
                <u-col>2</u-col>
            </u-row>
        `
        const vm = new Vue({
            el: div
        }).$mount();
        setTimeout(() => {
            const rowElement = vm.$el.querySelector(".row");
            expect(getComputedStyle(rowElement).marginLeft).to.be.equal("-10px");
            expect(getComputedStyle(rowElement).marginRight).to.be.equal("-10px");
            const colElement = vm.$el.querySelectorAll(".col");
            expect(getComputedStyle(colElement[0]).paddingRight).to.be.equal("10px");
            expect(getComputedStyle(colElement[1]).paddingLeft).to.be.equal("10px");
            vm.$el.remove();
            vm.$destroy();
            done();
        }, 0)
    })
    it('align', () => {
        const div = document.createElement("div");
        document.body.appendChild(div);
        const Constructor = Vue.extend(Row)
        let vm = new Constructor({
            propsData: {
                align: "center"
            }
        }).$mount(div);
        const rowElement = vm.$el;
        expect(getComputedStyle(rowElement).justifyContent).to.be.equal("center");
        vm.$el.remove();
        vm.$destroy();
    })
});
const expect = chai.expect;
import Vue from 'vue';
import Popover from '../src/components/popover';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Popover', () => {

    // it 的作用就相当于之前写测试时的代码块，将各个测试之间隔离开，第一个参数自定义，给测试起名字，就相当于之前写注释一样
    it('存在.', () => {
        expect(Popover).to.exist; //不是 falsy 值就不报错
    });
    it('Position', () => {
        const div = document.createElement("div")
        document.body.appendChild(div)
        Vue.component("u-popover", Popover)
        div.innerHTML = `
        <u-popover position="bottom" ref="a">
                <template slot="content">
                    <div>jkfejkfdsfjaldjfkajsldfjsaljdfsdfegagldfdsfefsdfsd</div>
                </template>
                <button>点击</button>
            </u-popover>
        `
        const vm = new Vue({
            el: div
        })
        vm.$refs.a.$refs.triggerWrapper.click();
        vm.$nextTick(() => {
            const contentWrapper = document.body.querySelector(".content-wrapper")
            expect(contentWrapper.classList.contains("position-bottom")).to.be.true;
        })
    });
    //```````````````还有一些测试没做
});
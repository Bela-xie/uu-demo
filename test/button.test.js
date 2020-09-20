const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/components/Button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {

    // it 的作用就相当于之前写测试时的代码块，将各个测试之间隔离开，第一个参数自定义，给测试起名字，就相当于之前写注释一样
    it('存在.', () => {
        expect(Button).to.be.ok //不是 falsy 值就不报错
    })
    it('可以设置icon.', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting'
            }
        }).$mount()
        const useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#icon-setting')
        vm.$destroy()
    })
    it('可以设置loading.', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting',
                loading: true
            }
        }).$mount()
        const useElements = vm.$el.querySelectorAll('use')
        expect(useElements.length).to.equal(1)
        expect(useElements[0].getAttribute('xlink:href')).to.equal('#icon-loading')
        vm.$destroy()
    })
    it('icon 默认的 order 是 0', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting',
            }
        }).$mount(div)
        const icon = vm.$el.querySelector('span')
        expect(getComputedStyle(icon).order).to.eq('0')
        vm.$el.remove()
        vm.$destroy()
    })
    it('设置 iconPosition 可以改变 order', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting',
                iconPosition: 'right'
            }
        }).$mount(div)
        const icon = vm.$el.querySelector('span')
        expect(getComputedStyle(icon).order).to.eq('2')
        vm.$el.remove()
        vm.$destroy()
    })
    it('点击 button 触发 click 事件', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting',
            }
        }).$mount()

        const callback = sinon.fake(); // sinon.fake()是一个假的函数，这个函数知道自己被传入的参数以及自己是否被调用过
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.been.called

    })
})
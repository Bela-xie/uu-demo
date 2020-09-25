const expect = chai.expect;
import Vue from "vue";
import Tabs from "../src/components/tabs";
import TabsBody from "../src/components/tabs-body.vue";
import TabsHead from "../src/components/tabs-head.vue";
import TabsItem from "../src/components/tabs-item.vue";
import TabsPane from "../src/components/tabs-pane.vue";
Vue.component("u-tabs", Tabs);
Vue.component("u-tabs-head", TabsHead);
Vue.component("u-tabs-item", TabsItem);
Vue.component("u-tabs-body", TabsBody);
Vue.component("u-tabs-pane", TabsPane);

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Tabs", () => {
    it("存在.", () => {
        expect(Tabs).to.exist;
    });
    it("selected", () => {
        const div = document.createElement("div");
        document.body.appendChild(div);
        div.innerHTML = `
        <u-tabs selected="woman">
        <u-tabs-head>
            <u-tabs-item name="woman">美女</u-tabs-item>
            <u-tabs-item name="finance">财经</u-tabs-item>
            <u-tabs-item name="news">新闻</u-tabs-item>
        </u-tabs-head>
        <u-tabs-body>
            <u-tabs-pane name="woman">美女相关资讯</u-tabs-pane>
            <u-tabs-pane name="finance">财经相关资讯</u-tabs-pane>
            <u-tabs-pane name="news">新闻相关资讯</u-tabs-pane>
        </u-tabs-body>
    </u-tabs>        
        `;
        const vm = new Vue({
            el: div,
        });
        //$nextTick里面不需要使用 done()
        vm.$nextTick(() => {
            const selectedElement = vm.$el.querySelector(".tabs-item[data-name='woman']")
            expect(selectedElement.classList.contains('active')).to.be.true;
        })
    });
    it("direction待测试", () => {})
});
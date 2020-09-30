<template>
  <u-tabs :selected.sync="selectedTag">
    <u-tabs-head>
      <u-tabs-item name="tab1">
        <u-icon name="setting"></u-icon>
        1
      </u-tabs-item>
      <u-tabs-item name="tab2">2</u-tabs-item>
      <u-tabs-item name="tab3">3</u-tabs-item>
      <u-tabs-item name="tab4" disabled>4</u-tabs-item>
    </u-tabs-head>
    <u-tabs-body>
      <u-tabs-pane name="tab1">tab 1</u-tabs-pane>
      <u-tabs-pane name="tab2">tab 2</u-tabs-pane>
      <u-tabs-pane name="tab3">tab 3</u-tabs-pane>
      <u-tabs-pane name="tab4">tab 4</u-tabs-pane>
    </u-tabs-body>
  </u-tabs>
</template>

<script>
import Tabs from "../../../src/components/tabs.vue";
import TabsBody from "../../../src/components/tabs-body.vue";
import TabsHead from "../../../src/components/tabs-head.vue";
import TabsItem from "../../../src/components/tabs-item.vue";
import TabsPane from "../../../src/components/tabs-pane.vue";
import Icon from "../../../src/components/icon.vue";
export default {
  data() {
    return {
      selectedTag: "tab1",
    };
  },
  components: {
    "u-tabs": Tabs,
    "u-tabs-head": TabsHead,
    "u-tabs-item": TabsItem,
    "u-tabs-body": TabsBody,
    "u-tabs-pane": TabsPane,
    "u-icon": Icon,
  },
};
</script>

<template>
  <div class="container">
    <div class="tabs">
      <TabHeader @current-tab="currentTabHandler" v-bind:key="tab.id" v-for="tab in data" v-bind:tabData="tab" v-bind:class="[currentTab.id===tab.id ?'active':'']"/>
    </div>
    <div class="tab-body">
        <TabBody v-bind:content="currentTab.content"/>
    </div>
  </div>
</template>

<script>
import TabHeader from "./TabHeader.vue";
import TabBody from './TabBody.vue';
export default {
  name: "TabsContainer",
  components: {
    TabHeader,TabBody
  },
  props: {
    data: Array,
  },
  data() {
    return { currentTab: this.data[0] };
  },
  methods:{
    currentTabHandler(id){
        this.currentTab=this.data.filter(tab=>tab.id === id)[0];
    }
  }
};
</script>

<style scoped>
.tabs {
  display: flex;
  border: 1px solid;
}
.tab-body{
    border: 1px solid;
    height: 400px;
    padding: 10px;
    margin-top: 10px;
}
.active{
    border-bottom: 5px solid rebeccapurple;
}
</style>

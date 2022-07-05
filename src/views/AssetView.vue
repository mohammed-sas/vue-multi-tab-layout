<template>
  <div class="container">
    <div class="tab-heading">
      <TabHeader
        @click.native="clickHandler(tab)"
        :tabData="tab"
        v-for="tab in specificData.category"
        :key="tab.id"
        :currentId="currentId"
      />
    </div>
    <router-view :data="data"/>
  </div>
</template>

<script>
import TabHeader from "../components/TabHeader.vue";
import AssetList from "../components/AssetList.vue";
export default {
  name: "AssetView",
  components: { TabHeader, AssetList },
  props: {
    data: Array,
  },
  data() {
    return {
       specificData: this.data.filter((item) => item.title === "assets")[0],
      list: [],
      currentId:this.data.filter((item) => item.title === "assets")[0].category[0].id
   
    };
  },
  methods: {
     clickHandler(tab) {
      this.currentId=tab.id;
     this.$router.push({path:`/assets/${tab.title}`})
    },
  
  },
   mounted(){

    this.$router.push({
      path:`/assets/${this.specificData.category[0].title}`
    })
  }
};
</script>

<style scoped>
.tab-heading {
  display: flex;
  gap: 10px;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
  padding-left: 20px;
}
</style>

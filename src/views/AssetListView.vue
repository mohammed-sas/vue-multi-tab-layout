<template>
  <div>
   <AssetList :list="list"/>
  </div>
</template>

<script>
import AssetList from '../components/AssetList.vue'
export default {
  name: "AssetListView",
  props: {
    data: Array,
  },
  components:{
    AssetList
  },
  data() {
    return {
      id: null,
      list: [],
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData();
      },
      { immediate: true }
    );
  },
  methods: {
    fetchData() {
      this.id = this.$route.params.id;
      let item = this.data.filter((item) => item.title == "assets")[0];
      this.list = item.category.filter((obj) => obj.title == this.id)[0].list;
    },
  },
};
</script>

<template>
  <div>
   <InventoryList :list="list"/>
  </div>
</template>

<script>
import InventoryList from '../components/InventoryList.vue'
export default {
  name: "InventoryListView",
  props: {
    data: Array,
  },
  components:{
    InventoryList
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
      let item = this.data.filter((item) => item.title == "inventory")[0];
      this.list = item.category.filter((obj) => obj.title == this.id)[0].list;
    },
  },
};
</script>

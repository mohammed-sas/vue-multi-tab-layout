<template>
  <table class="table">
    <tr>
      <th>Category</th>
      <th>Name</th>
    </tr>
    <tr :key="item.id" v-for="item in list">
      <td>{{ item.name }}</td>
      <td>{{ item.category }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "AssetList",
  props: {
    list: Array,
  },
};
</script>

<style scoped>
.table td,
.table th {
  border: 1px solid;
  padding: 10px;
  width: 200px;
}
</style>

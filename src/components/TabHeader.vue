<template>
  <h3 class="heading" :class="[tabData.id === currentId ? 'active' : '']">
    {{ tabData.title }}
  </h3>
</template>

<script>
export default {
  name: "TabHeader",
  props: {
    tabData: Object,
    currentId: String,
  },
};
</script>

<style scoped>
.heading {
  padding: 4px 12px;
  cursor: pointer;
}
.active {
  border-bottom: 5px solid purple;
}
</style>

<template>
  <div id="app">
    <h1>Multi tab model layout</h1>
    <div class="container">
      <aside class="sidebar">
        <router-link active-class="active-side" :to="{path:`/${tab.title}`}" v-bind:key="tab.id" v-for="tab in data">{{
          tab.title
        }}</router-link>
      </aside>
      <div class="right-side">
        <router-view :data="data"/>
      </div>
    </div>
  </div>
</template>

<script>
import { data } from "./constants/data";
export default {
  name: "App",
  data() {
    return {
      data: data,
    };
  },
  mounted(){
    this.$router.push({
      path:`/assets/AllItems`
    })
  }
};
</script>

<style >
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h1{
  text-align: center;
}

a{
  text-decoration: none;
  color: black;
}
.container{
  display: flex;
  gap: 5px;
  border: 1px solid;
  height: 80vh;
}
.sidebar{
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid;
  height: 100%; 
  width: max-content;
  padding: 10px;

}
.right-side{
  flex-grow: 1;
}
.active-side{
  border-bottom: 5px solid purple;
}
</style>

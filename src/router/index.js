import Vue from "vue";
import VueRouter from "vue-router";
import AssetView from "../views/AssetView";
import InventoryView from "../views/InventoryView";
import InventoryListView from '../views/InventoryListView';
import AssetListView from '../views/AssetListView';
Vue.use(VueRouter);

const routes = [
  {
    path: "/assets",
    component: AssetView,
    children:[
      {
        path:":id",
        component:AssetListView,
      }
    ]
 
  },
  {
    path: "/inventory",
    component:InventoryView,
    children:[
      {
        path:":id",
        component:InventoryListView,
      }
    ]

 
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

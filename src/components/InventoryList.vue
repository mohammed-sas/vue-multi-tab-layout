<template>
    
     <table class="table">
        <tr>
            <th>Item</th>
            <th>Store Room</th>
        </tr>
        <tr :key="item.id" v-for="item in list">
            <td>{{item.item}}</td>
            <td>{{item.storeroom}}</td>
        </tr>
    </table>
</template>

<script>
export default {
    name:'InventoryList',
    props:{
        list:Array
    }
}
</script>

<style scoped>
    .table th,.table td{
        border: 1px solid;
        padding: 10px;
        width: 200px;
    }
</style>
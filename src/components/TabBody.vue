<template>
    <p>{{content}}</p>
</template>

<script>
export default {
    name:'TabBody',
    props:{
        content:String
    }
}
</script>

<style scoped>
    p{
        text-justify:inter-word;
        text-align: justify;
    }
</style>
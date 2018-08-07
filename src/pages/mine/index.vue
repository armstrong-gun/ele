<template>
<page class="page">
        <h1>我的</h1>
        <button @click="tologin()">LOGIN</button>
</page>
</template>

<script>
export default {
        methods:{
                tologin(){
                        this.$router.push('/login')
                }
        }
}
</script>

<style>

</style>


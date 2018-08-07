<template>
<div id="tabs">
    <ul class="tabs">
        <li class="tabItem" v-for="item in navList" :key="item">
            {{item}}
        </li>    
    </ul>    
</div>
</template>

<script>
export default {
    data(){
        return{
            navList:['首页','发现','订单','我的']
        }
    }
}
</script>

<style scoped>
.tabs{
    position: absolute;
    bottom:0;
    left:0;
    display: flex;
}
.tabItem{
    
}
</style>

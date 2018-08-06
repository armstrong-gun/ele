<template>
    <div id="home">

        <filter-bar></filter-bar>
    </div>    
</template>

<script>
//引入筛选栏
import FilterBar from '@/components/home/index/FilterBar.vue'
export default {
    data(){
        return{
            
        }
    },
    methods:{

    },
    components:{
        FilterBar
    }
}
</script>

<style scoped>
#home{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 100px;
    background-color: lightblue;
    width: 100%;
}

</style>

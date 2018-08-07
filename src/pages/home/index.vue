<template>
    <h1>首页</h1>
</template>

<script>
import {getEntries_BannerData,getInside_Sort_FilterData} from '../../services/home/homeService.js'
export default {
    created(){
        // getEntries_BannerData().then(response=>{
        //     console.log(response);
        // });
        getInside_Sort_FilterData().then(response=>{
             console.log(response);
        })
    }
}
</script>

<style>

</style>

<template>
    <h1>首页</h1>
</template>

<script>
import {getEntries_BannerData,getInside_Sort_FilterData,getOutside_Sort_FilterData,getActivity_TypesData,getDelivery_ModeData,getSupportsData,getAverage_CostsData,getLocationData,getRestaurantData} from '../../services/home/homeService.js'
export default {
    created(){
        // getEntries_BannerData().then(response=>{
        //     console.log(response);
        // });
        getRestaurantData(0).then(response=>{
            console.log(response);
            
        })
    }
}
</script>

<style>

</style>

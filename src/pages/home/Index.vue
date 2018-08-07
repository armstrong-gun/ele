<template>
    <page id="home">
        <!-- 轮播图 -->
        <Banner></Banner>

    </page>
</template>

<script>
//引入请求轮播图图片数据
import {getEntries_BannerData} from '@/services/home/homeService.js'
//引入轮播组件
import Banner from '@/components/home/index/Banner.vue'
export default {
    data(){
        return{
            bannerData:[]
        }
    },
    components:{
        Banner
    },
    mounted(){
        //请求轮播图图片数据
        getEntries_BannerData().then(result=>{
            console.log(result);
            
        })
    }
    
}    
</script>

<style>

</style>


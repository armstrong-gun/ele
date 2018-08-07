<template>
    <page id="home">
        <!-- 轮播图 -->
        <Banner :data="bannerData"></Banner>
        <activity-logo></activity-logo>
        <div class="shoplist-title">推荐商家</div>
        <filter-bar></filter-bar>
    </page>
</template>

<script>
//引入请求轮播图图片数据
import {getEntries_BannerData} from '@/services/home/homeService.js'
//引入轮播组件
import Banner from '@/components/home/index/Banner.vue'
//引入活动logo组件
import ActivityLogo from '@/components/home/index/ActivityLogo.vue'
//引入筛选栏
import FilterBar from '@/components/home/index/FilterBar.vue'
export default {
    data(){
        return{
            bannerData:[]
        }
    },
    components:{
        Banner,
        FilterBar,
        ActivityLogo
    },
    mounted(){
        //请求轮播图图片数据
        getEntries_BannerData().then(result=>{
            // console.log(result);
            let newArr = [[]];
            let num = 0;
            for (let i = 1; i <= result.length; i++) {
                newArr[num].push(result[i-1]);
                if (i%10 == 0) {
                    num++;
                    newArr[num]=[];
                }
            }
            console.log(newArr);
            this.bannerData = newArr;
        })
    }
    
}    
</script>

<style scoped>
#home{
    background-color: #fff;
}
.shoplist-title{
    height: 72px;
    width: 100%;
    text-align: center;
    color: #000;
    font-size: 28px;
    line-height: 72px;
    position: relative;
}
.shoplist-title:before,.shoplist-title::after{
    content: '';
    display: block;
    width: 69px;
    height: 1px;
    background-color: #999;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.shoplist-title:before{
    left: 224px;
}
.shoplist-title::after{
    right: 224px;
}
</style>


<template>
    <div class="swiper-container" ref="banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(swiperItem, index) in data"  :key="index">
                <ul>
                    <li v-for="item in swiperItem" :key="item.id">
                        <div><img :src="item.image_hash" alt=""></div>
                        <p>{{item.name}}</p>
                    </li>
                </ul>
            </div>            
        </div>
        <!-- 分页器  分页器显示不出来，有待解决-->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
export default {
    props:{
        data:Array
    },
    data(){
        return{
            swiperData:[ ]
        }
    },
    mounted(){
        //创建swiper对象
        this.bannerSwiper = new Swiper(this.$refs.banner,{
            loop:true,
            pagination: {
                el: '.swiper-pagination',
            }
        })
    },
    updated(){
        this.bannerSwiper.update();
        this.bannerSwiper.reLoop();
        this.bannerSwiper.slideTo(1,0);
    }

}
</script>

<style scoped>
.swiper-container{
    background-color: #fff;
    position: relative;
    z-index: 15;
}
.swiper-slide ul{
    display: flex;
    flex-wrap: wrap;
    
}
.swiper-slide li{
    width: 20%;
    height: 128px;
    box-sizing: border-box;
    text-align: center;
}
.swiper-slide p{
    font-size: 24px;
    color: #666;
}
.swiper-pagination{
    width: 20px;
    height: 20px;
    background-color: #000;
}

</style>

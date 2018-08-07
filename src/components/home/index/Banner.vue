<template>
    <div class="swiper-container" ref="banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in swiperData" :key="item.id">
                <img :src="item.imgUrl" alt="">
            </div>            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            swiperData:[
                {id:1,imgUrl:'http://img03.tooopen.com/uploadfile/downs/images/20110714/sy_20110714135215645030.jpg'},
                {id:2,imgUrl:'http://img02.tooopen.com/images/20150507/tooopen_sy_122395947985.jpg'},
                {id:3,imgUrl:'http://img.zcool.cn/community/011a5859ac137ea8012028a92fc78a.jpg@1280w_1l_2o_100sh.jpg'},
                {id:4,imgUrl:'http://www.qqma.com/imgpic2/cpimagenew/2018/4/5/6e1de60ce43d4bf4b9671d7661024e7a.jpg'}
            ]
        }
    },
    mounted(){
        //创建swiper对象
        this.bannerSwiper = new Swiper(this.$refs.banner,{
            loop:true
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
.swiper-slide img{
    width: 100%;
}

</style>

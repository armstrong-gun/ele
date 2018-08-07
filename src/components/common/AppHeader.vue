<template>
<div id="appheader">
    <!-- 当为首页时header为定位 -->
    <div class="gps" v-if="header == '首页'">
        <i class="iconfont icon-location"></i>
        <!-- 选择地点 -->
        <div class="location">location</div>
    </div>
    <!-- 其他时间为标题 -->
    <div class="head" v-else>
        <i class="iconfont icon-arrow_lift"></i>
        <div class="title">
            {{header}}
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            header:'首页',
        }
    },
    methods:{
        //获取跳转页面资料修改标题,暂时只有tabs的，之后存在小分页再进行修改
        getInfo(){
            this.$center.$on('changeHeader',(value)=>{
                this.header = value.title ;
            })
        }  
    },
    mounted(){
        this.getInfo();
    }
}
</script>

<style scoped>
.head, .gps{
    height:88px;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    position: absolute;
    top:0;
    left:0;
    width:100%;
}
.iconfont , .title, .location{
    color:#fff;
    height:88px;
    line-height:88px;
    font-size: 36px;
}
.iconfont{
    position: absolute;
    left:0;
    top:0;
    text-align: center;
    width:88px;
    color:#fff;
    font-size: 36px;
    line-height:88px;
}
.title{
    text-align: center;
}
.location{
    position: absolute;
    left:80px;
    top:0;

}
</style>

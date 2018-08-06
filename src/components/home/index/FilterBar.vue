<template>
    <div id="filterbar">
        <div class="filter-header">
            <ul>
                <li class="nav" @click="toShowSort">
                    <span>综合排序<i class="iconfont icon-xia"></i></span>
                </li>
                <li class="nav" @click="hidePullDown"><span>距离最近</span></li>
                <li class="nav" @click="hidePullDown"><span>品质联盟</span></li>
                <li @click="toShowOpen">
                    <span>筛选<i class="iconfont icon-shaixuan" ></i></span>
                </li>
            </ul>
           
        </div>

        <!-- 遮罩层 和 事件点板-->
        <div class="big-cover" v-show="showOpen || showSort" @click="hidePullDown"></div>
        <transition name="slide">
            <div class="filter-sort" v-show="showSort">
                <ul>
                    <li v-for="(sortItem, index) in sortListData" :key="index">{{sortItem}}</li>
                </ul>
            </div>
        </transition>    
        <transition name="slide">
            <div class="filter-open" v-show="showOpen">
                <div class="list-box">
                    <div class="busynessService">
                        <h4>商家服务(可多选)</h4>
                        <ul>
                            <li><span><i></i>蜂鸟专送</span></li>
                            <li><span><i></i>蜂鸟专送</span></li>
                            <li><span><i></i>蜂鸟专送</span></li>
                            <li><span><i></i>蜂鸟专送</span></li>
                            <li><span><i></i>蜂鸟专送</span></li>
                        </ul>
                    </div>
                    <div class="discountActivity">
                        <h4>优惠活动(单选)</h4>
                        <ul>
                            <li><span>新用户优惠</span></li>
                            <li><span>特价商品</span></li>
                            <li><span>下单立减</span></li>
                            <li><span>赠品优惠</span></li>
                            <li><span>下单返红包</span></li>
                            <li><span>进店领红包</span></li>
                        </ul>
                    </div>
                    <div class="personCost">
                        <h4>人均消费</h4>
                        <ul>
                            <li><span>￥20以下</span></li>
                            <li><span>￥20 -￥40</span></li>
                            <li><span>￥40 -￥60</span></li>
                            <li><span>￥60 -￥80</span></li>
                            <li><span>￥80 -￥100</span></li>
                            <li><span>￥100以上</span></li>
                        </ul>
                    </div>
                </div>
                <div class="btn-box">
                    <button class="clear" disabled="disabled"></button>
                    <button class="makeSure"></button>
                </div>
    
            </div>
        </transition>
        
    </div>    
</template>

<script>
export default {
    data(){
        return{
            showSort:false,
            showOpen:false,
            //显示隐藏要改成添加和减少class的形式
            sortListData:['综合排序','好评优先','销量最高','起送价最低','配送最快','配送费用最低','人均从低到高','人均从高到低'],
            openListData:[
                {}
            ]
        }
    },
    methods:{
        toShowSort(){
            this.showSort = true;
            this.showOpen = false;
        },
        toShowOpen(){
            this.showOpen = true;
            this.showSort = false;
        },
        hidePullDown(){
            this.showSort = false;
            this.showOpen = false;
        }
    }
}
</script>

<style scoped>
#filterbar{
    width: 100%;
    height: 80px;
    position: relative;
    top: 0;
    left: 0;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
}
.filter-header{
    width: 100%;
}
.filter-header ul{
    width: 100%;
    display: flex;
}
.filter-header ul li{    
    font-size: 32px;
    color: #666;
    text-align: center;
    line-height: 80px;
}
.filter-header .nav{
    flex: 1;
}
.filter-header ul li:last-child{
    width:160px; 
}
.filter-header ul i{
    font-size: 32px;
}


.big-cover{
    position: absolute;
    top: 80px;
    left: 0;
    /* bottom: -100px; */
    /*遮罩层的高度有待优化 */
    height: 1153px;
    background-color: rgba(0, 0,0,.5);
    width: 100%;

}
.filter-sort{
    position: absolute;
    width: 100%;
    padding: 16px 0  24px 0;
    border-top: 1px solid #ddd;
    background-color: #fff;
}
.filter-sort ul li{
    width: 100%;
    height: 80px;
    padding-left: 40px;
    line-height: 80px;
    font-size: 28px;
    color: #333;
    background-color: #fff;
}
.filter-open{
    position: absolute;
    width: 100%;
    border-top: 1px solid #ddd;
    padding: 20px 0;
    background-color: #fff;
}

.list-box div{
    width: 100%;  
    margin: 20px 0;  
}
.list-box h4{
    font-weight: normal;
    padding-left: 1%;
    margin-bottom: 15px;
    width: 100%;
    font-size: 24px;
    color: #666;
    height: 31px;
    line-height: 31px;
    box-sizing: border-box;
}
.list-box ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.list-box ul li{
    width: 30%;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
    font-size: 28px;
}
.list-box ul li span{
    background-color: #fafafa;
    height: 70px;
    line-height: 70px;
    display: inline-block;
    width: 100%;
    color: #333;
}
@keyframes slideInDown {
    0%{transform: translateY(-100%)}
    100%{transform: translateY(0%)}
}
@keyframes slideOutUp {
    0%{transform: translateY(0%)}
    100%{transform: translateY(-100%)}
}
.slide-enter-active{
    animation: slideInDown 300ms;
}
.slide-leave-active{
    animation: slideOutUp 300ms;
}
</style>

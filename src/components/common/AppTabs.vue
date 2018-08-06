<template>
<div id="apptabs">
    <ul class="tabs">
        <li class="tab" v-for="(value,key) in navList" :key="key" @click="changePage(value.path)" >
            <i :class="value.class"></i>
           <div> 
               {{value.title}}
           </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data(){
        return{
            navList:[
                {title:'首页',class:'icon-elmyhq iconfont',path:'/home'},
                {title:'发现',class:'icon-icon-test iconfont',path:'/discover'},
                {title:'订单',class:'icon-dingdan iconfont',path:'/order'},
                {title:'我的',class:'icon-home iconfont',path:'/mine'}
            ]
        }
    },
    methods:{
        changePage(path){
            this.$router.push(path);
        }
    }
}
</script>

<style scoped>
.tabs{
    width:100%;
    height:91px;
    padding-top:9px;
    position: absolute;
    bottom: 0;
    left:0;
    display: flex;
    background:#fff;
}
.tab{
    flex:25%;
    color:#8e8e93;
    font-size: 24px;
    text-align: center;
}
.active{
    color:#0089dc;
}
.tab i{
    font-size: 40px;
}
.tab div{
    padding-top:5px;
}
.tab i:last-child, .tab i:nth-child(2){
    font-weight: 900;
}
</style>

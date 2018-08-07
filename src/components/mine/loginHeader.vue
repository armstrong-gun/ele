<template>
<div id="loginHeader">
    <div class="profile" @click="tologin()">
        <img class="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg==" alt="">
        <div class="rightSide">
             <p class="title">登录/注册</p>
             <p class="detail">
                <i class="iconfont icon-shouji"></i>
                <span>登录后享受更多特权</span>
             </p>
        </div>
        <i class="iconfont icon-icon1"></i>
    </div>
    <div class="walletNav">
        <ul>
            <li v-for="item in walletList" :key="item">
                <div class="item">
                    <i class="iconfont icon-icon-test"></i>
                    <p>{{item}}</p>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
data(){
    return{
        walletList:['钱包','红包','金币']
    }
},
 methods:{
        tologin(){
             this.$router.push('/login')
        }       
    }
}
</script>

<style soped>
.profile{
     background-image: linear-gradient(90deg,#0af,#0085ff);
     color:#fff;
     height:220px;
     width:100%;
     font-size: 44px;
     padding:50px 30px;
     box-sizing: border-box;
     display: flex;
     position: relative;
}
.profile .logo{
     border-radius: 50%;
     margin-right:36px;
}
.rightSide .title{
margin:10px 0;
width:100%;
}
.detail{
height:28px;
line-height:28px;
font-size:22px;
position: relative;
}
.detail .icon-shouji{
font-size: 40px;
font-weight:bold;
width:20px;
position: absolute;
left:-10px;
}
.detail span{
display: inline-block;
margin-left:20px;
margin-top:5px;
}
.icon-icon1{
position: absolute;
right:10px;
top:50%;
transform: translateX(-50%);
font-size: 30px;
font-weight: bold;
}
/* wallet */
.walletNav ul{
    display: flex;
    height:167px;
    justify-content: space-between;
    background:#fff;
    border-bottom: solid 1px #ddd;
}
.walletNav li:nth-child(1), .walletNav li:nth-child(2){
    border-right:solid 1px #ddd;
}
.walletNav li{
    text-align:center;
    width:33.33%;
    position: relative;
}
.item{
    position: absolute;
    top:50%;
    left:50%;
    transform: translateX(-50%) translateY(-50%);
    font-size: 24px;
}
.item .iconfont{
    font-size: 50px;
}
.item p{
    margin-top:10px;
}
</style>

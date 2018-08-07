<template>
<div id="login">
    <div class="content">
        <div class="header">
            logo
        </div>
        <div class="inp">
            <div class="inpItem">
                <input type="tel" max-length="11" placeholder="手机号">
                <span class="code">获取验证码</span>
            </div>
            <div class="inpItem">
                <input type="tel" max-length="8" placeholder="验证码">
            </div>
            <div class="tips">
                温馨提示：未注册饿了么账号的手机，登录时将自动注册，且代表您已同意
                <a href="">《用户服务协议》</a>
            </div>
            <button class="login">登录</button>
            <div class="aboutUs">
                关于我们
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
#login{
    width:100%;
    z-index: 999;
    position: absolute;
    box-sizing: border-box;
    padding-top:80px;
}
.header{
    font-size: 40px;
}
.content{
    width:600px;
    margin:0 auto;
}
.header{
    height:242px;
}
.inp .inpItem{
    width:100%;
    height:96px;
    line-height:96px;
    padding-left:20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 30px;
    font-size: 26px;
    color:#999;
}
.inpItem input{
    font-size:26px;
    line-height:96px;
}
.code{
    float:right;
    padding-right:20px;
    color:#ccc;
}
.tips{
    font-size: 28px;
    color:#999;
    line-height:40px;
}
.tips a{
    color:#2395ff;
}
.login{
    height:84px;
    line-height:84px;
    width:100%;
    margin-top:60px;
    border-radius: 8px;
    background:#4cd96f;
    color:#fff;
    text-align:center;
    font-size: 32px;
}
.aboutUs{
    margin-top:40px;
    text-align:center;
    color:#999;
    font-size: 22px;
}
</style>

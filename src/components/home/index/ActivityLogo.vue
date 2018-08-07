<template>
    <div id="activity-logo">
        <ul>
            <li>
                <div class="wrap" >
                    <h3>品质套餐</h3>
                    <p>搭配齐全吃得好</p>
                    <div class="left">立即抢购 ></div>
                    <img src="//fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt="">
                </div>            
            </li>
            <li>
                <div class="wrap">
                    <h3>限量抢购</h3>
                    <p>超值美味9.9元起</p>
                    <div class="right"><span>1037人</span>正在抢 ></div>
                    <img src="//fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt="">
                </div>
            </li>
        </ul>      
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#activity-logo {
  width: 100%;
  padding: 0 20px;
  margin-bottom: 16px;
  box-sizing: border-box;
  height: 280px;
}
ul {
  display: flex;
  width: 100%;
  margin-bottom: 6px;
}
li {
  width: 50%;
  height: 280px;
  padding: 24px 0 0 30px;
  box-sizing: border-box;
  background: linear-gradient(0deg, #f4f4f4 5%, #fafafa 95%);
  position: relative;
}
li:first-child{
    margin-right: 6px;
}
li h3 {
  font-weight: 700;
  font-size: 32px;
  color: #333;
  margin-bottom: 9px;
}
li:last-child h3{
    color: #e81919;
}
li p {
  font-size: 28px;
  color: #777;
  margin-bottom: 9px;
}
li img {
  position: absolute;
  right: 0;
  bottom: 0;
}
li .left {
  color: #af8260;
  font-weight: 700;
  font-size: 24px;
}
li .right {
  font-size: 24px;
  font-weight: 700;
  color: #333;
}
li .right span {
  color: #e81919;
}
</style>

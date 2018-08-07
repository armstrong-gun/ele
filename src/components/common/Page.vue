<template>
<div class="page" ref="page">
    <div class="page-wrap">

        <slot/>

    </div>
</div>
</template>

<script>
export default {
    props:{
        onScroll:Function,
        onClick:String,
    },
    data(){
        return{
            click:'',
        }
    },
    methods:{
        refreshDOM(){
            this.scroll.refresh();
        }
    },
    watch:{
        onClick:{
            handler:function(){
                if(this.onClick){
                this.click = this.onClick;
                this.scroll.scrollToElement(('.'+this.click),300);
                }
            }
        }
    },
    mounted(){
        //创建滚动视图，让页面可以滚动
        let scroll = new IScroll(this.$refs.page,{
            probeType: (this.onScroll) ? 3 : 0,
        });
        // 将局部变量赋予给全局变量
        this.scroll = scroll;
        scroll.on('beforeScrollStart', ()=>{
            scroll.refresh();
        });
        scroll.on('scroll',()=>{
            let disY = scroll.y - scroll.maxScrollY ;
            this.onScroll(disY) ;
        })
        scroll.on('scrollEnd',()=>{
            this.click = '';
        })
    }
}
</script>
 
<style scoped>
.page{
  width: 100%;
  position: absolute;
  top: 88px;
  left: 0;
  bottom: 0;
  background: #ebebeb;
  overflow: hidden;
}
</style>

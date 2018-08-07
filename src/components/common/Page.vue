<template>
    <div class="page" ref="page">
        <div class="page-wrap">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    moounted(){
        //创建滚动视图
        let myScroll = new IScroll(this.$refs.page,{
            probeType:3
        });

    }
}
</script>
    
<style scoped>
    .page{
        width: 100%;
        position: absolute;
        top: 182px;
        left: 0;
        bottom: 0;
        overflow: hidden;
        background-color: lightcoral;
    }

</style>

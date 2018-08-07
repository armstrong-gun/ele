<template>
  <div id="app">
    <!-- 首页的header和其他页面的不一洋 -->
    <router-view></router-view>
    <app-tabs></app-tabs>
  </div>
</template>


//引入公共组件
<script>
import AppTabs from './components/common/AppTabs.vue'
export default {
  components:{
    AppTabs,
  }
}
</script>

<style>
</style>

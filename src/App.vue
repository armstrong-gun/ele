<template>
  <div id="app">
    <!-- 首页的header和其他页面的不一洋 -->
    <router-view></router-view>
    <!-- <app-tabs></app-tabs> -->
  </div>
</template>

<script>
//引入公共组件
import AppTabs from '@/components/common/AppTabs'
import AppHeader from '@/components/common/AppHeader'
export default {
  name: 'App',
  components:{
    AppTabs,
    AppHeader
  }
}
</script>

<style>

</style>

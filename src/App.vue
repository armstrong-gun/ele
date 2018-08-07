<template>
  <div id="app">
    <!-- 首页的header和其他页面的不一样 -->
    <app-header/>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <app-tabs></app-tabs>
  </div>
</template>

<script>
//引入公共组件
import AppTabs from '@/components/common/AppTabs.vue'
import AppHeader from '@/components/common/AppHeader.vue'
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

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//引入pages里面的组件
import Home from '@/pages/home'
import Discover from '@/pages/discover'
import Order from '@/pages/order'
import Mine from '@/pages/mine'
import Login from '@/pages/login'

export default new Router({
  routes: [
    {
      path:'/home',
      alias:'/',
      name:'home',
      component:Home
    },
    {
      path:'/discover',
      name:'discover',
      component:Discover
    },
    {
      path:'/order',
      name:'order',
      component:Order
    },
    {
      path:'/mine',
      name:'mine',
      component:Mine
    },
    {
      path:'/login',
      name:'login',
      component:Login
    }
  ]
})

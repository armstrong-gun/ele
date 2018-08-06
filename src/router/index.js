import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Home from '@/pages/home/Index.vue'
=======
>>>>>>> master
Vue.use(Router)

//引入pages里面的组件
import Home from '@/pages/home'
import Discover from '@/pages/discover'
import Order from '@/pages/order'
import Mine from '@/pages/mine'


export default new Router({
  routes: [
    {
<<<<<<< HEAD
      path: '/home',
      name: 'home',
      component: Home
=======
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
>>>>>>> master
    }
  ]
})

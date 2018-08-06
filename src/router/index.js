import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})

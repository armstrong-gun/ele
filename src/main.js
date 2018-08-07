import Vue from 'vue'
import App from './App'//根组件
import router from './router'//路由对象
import center from './center.js'//订阅发布模式中间对象
import store from './store'//数据管理对象

Vue.config.productionTip = false
//引入过滤器
import filters from './filters'
Vue.use(filters)
//引入全局组件
import Page from './components/common/Page'
//引入商家卡片组件
import RestauranCard from './components/common/RestaurantCard.vue'
Vue.components(
  {
    'page':Page,
    'RCard':RestauranCard
  }
)

//为了非父子组件传值
Vue.prototype.$center = center



new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

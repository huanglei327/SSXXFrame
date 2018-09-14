import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index/index.vue'
import Error from '../views/Error/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta:{
        title:'首页'
      }
    },
    {
      path: '/Error',
      name: 'Error',
      component: Error,
      meta:{
        title:'错误界面'
      }
    }
  ]
})

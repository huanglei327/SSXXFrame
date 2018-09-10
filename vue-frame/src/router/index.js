import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index/index.vue'
import A from '../views/WxLogin/A/index.vue'
import B from '../views/WxLogin/B/index.vue'


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
      path: '/A',
      name: 'A',
      component: A,
      meta:{
        title:'登陆A'
      }
    },
    {
      path: '/B',
      name: 'B',
      component: B,
      meta:{
        title:'登陆B'
      }
    },
  ]
})

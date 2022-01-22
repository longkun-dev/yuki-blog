import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/Index'
import PostItem from '@/view/PostItem'
import PostDetail from '@/layout/PostDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/post/detail',
      name: 'PostDetail',
      component: PostDetail
    }, {
      path: '/post/post001',
      name: 'PostItem',
      component: PostItem
    }
  ]
})

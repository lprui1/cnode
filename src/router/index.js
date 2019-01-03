import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Detail from '@/views/detail'
import toppic from '@/views/toppic'
import Edit from '@/views/edit'
import Loginname from '@/views/loginname'
import toppicCollect from '@/views/toppicCollect'
import message from '@/views/message'
import signin from '@/components/signin'
import User from '@/components/user'
import about from '@/components/cnode/about'
import API from '@/components/cnode/api'
import getstart from '@/components/cnode/getstart'



Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/detail/:id', //传参第一步   在目标路由匹配所需的参数
      component: Detail
    },
    {
      path: '/signin',
      component: signin,
    },
    {
      path: '/toppic',
      component: toppic,
    },
    {
      path: '/user',
      component: User,
    },
    {
      path: '/about',
      component: about,
    },
    {
      path: '/message',
      component: message,
    },
    {
      path: '/api',
      component: API,
    },
    {
      path: '/getstart',
      component:getstart,
    },
    {
      path: '/edit/:id',
      component:Edit,
    },
    {
      path: '/loginname/:loginname',
      component:Loginname,
    },
    {
      path: '/toppicCollect/:loginname',
      component: toppicCollect,
    }
  ]
})

export default  router

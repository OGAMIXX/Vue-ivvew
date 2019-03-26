import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Ts from '@/components/com/Ts'
import login from '@/components/page/login'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Ts',
      component: Ts
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

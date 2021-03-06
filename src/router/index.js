import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'//..
import List from '@/components/List'//..
import Outter from '@/components/Outter'//..
import Login from '@/views/Login'//..
import Register from '@/views/Register'//..
import Inner from '@/components/Inner'//..
import Index from '@/views/Index'//..
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/outter',
      name: 'outter',
      component: Outter,
      children:[
        {
          path: 'login',
          name: 'login',
          component: Login,
        },
        {
          path: 'register',
          name: 'register',
          component: Register,
        }
      ]
    },
    {
      path: '/inner',
      name: 'inner',
      component: Inner,
      alias:'/',
      children:[
        {
          path: 'index',
          alias:'',
          name: 'index',
          component: Index,
        }
      ]
    }
  ]
})

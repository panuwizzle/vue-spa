import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Param from '@/components/Param'
import Paramdetail from '@/components/Paramdetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/param',
      component: Param
    },
    {
      path: '/paramdetail/:id',
      name: 'Paramdetail',
      component: Paramdetail
    }
  ],
  mode: 'history'
})

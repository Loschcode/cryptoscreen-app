import Vue from 'vue'
import Router from 'vue-router'
import Coins from '@/components/Coins'
import Portfolio from '@/components/Portfolio'
import Setting from '@/components/Setting'

Vue.use(Router)

Vue.router = new Router({
  routes: [

    {
      path: '/',
      redirect: { name: 'coins' }
    },

    {
      path: '/coins',
      name: 'coins',
      component: Coins
    },

    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },

    {
      path: '/setting',
      name: 'setting',
      component: Setting
    }

  ]
})

export default Vue.router

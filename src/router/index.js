import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import guestAccess from '@/components/FreeAccessweb'
import SimpleEdit from '@/components/SimpleEdit'
import guestBoard from '@/components/GuestBoard'
import upgrade from '@/components/upgrade'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/guestworkwave',
      name: 'guestAccess',
      component: guestAccess,
    },
    {
      path: '/simple',
      name: 'pureWave',
      component: SimpleEdit,
    },
    {
      path: '/simple',
      name: 'pureWave',
      component: SimpleEdit,
    },
    {path:'/guestRhythmBoard',
    name: 'guestBoard',
    component: guestBoard,
  },
  {path:'/upgrade',
    name: 'upgrade',
    component:upgrade,
  },
  {path:'/GuestResults',
  name: 'upgrade',
  component:upgrade,
},
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import DashBoard from '../components/dashboard/Dashboard'
import Profile from '../components/dashboard/Profile'
import Users from '../components/dashboard/Users'
const routes = [
    { path: '/dashboard', component: DashBoard },
    { path: '/profile', component: Profile },
    { path: '/users', component: Users }

  ]

  const router = new VueRouter({
    mode: 'history',
    hashbang:false,
    routes, // short for `routes: routes`
   

  
  })

  
  export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from '../views/Dashboard.vue'
import team from '../views/Team.vue'
import projects from '../views/Projects'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/team',
    name: 'team',
    component: team
  },
  {
    path: '/projects',
    name: 'projects',
    component: projects
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

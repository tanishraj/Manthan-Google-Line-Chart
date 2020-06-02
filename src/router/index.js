import Vue from 'vue'
import VueRouter from 'vue-router'
import GraphPage from '../views/graph.page';

Vue.use(VueRouter)

const routes = [
  {
    name: 'graph-page',
    path: '/',
    component: GraphPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

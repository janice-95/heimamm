import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Login from '../views/login'
import Home2 from '../views/home/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: '',
      component: Home2
    }, {
      path: 'comment', // 完整 相对
      component: () => import('../views/comment')
    }, {
      path: 'material',
      component: () => import('../views/material')
    }, {
      path: 'articles',
      component: () => import('../views/articles')
    }]
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/comment',
    component: Comment
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }

]

const router = new VueRouter({
  routes
})

export default router

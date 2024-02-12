import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Home from '../views/Musician-net/Home.vue'
import Ajout from '../views/Musician-net/Ajout.vue'
import List from '../views/Musician-net/List.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/my-project',
      name: 'musician-net',
      component: Home
    }
    ,
    {
      path: '/ajout',
      name: 'Ajout d\' employer',
      component: Ajout
    }
    ,
    {
      path: '/list',
      name: 'List d\' employer',
      component: List
    }
  ]
})

export default router

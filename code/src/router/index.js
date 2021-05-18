import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/privacity',
    name: 'privacity',
    component: () => import( '../components/privacity/privacity.vue')
  },
  {
    path: '/special-dishes',
    name: 'specialDishes',
    component: () => import( '../components/categories/specialDishes.vue')
  },
  {
    path: '/sandwich',
    name: 'sandwich',
    component: () => import( '../components/categories/sandwich.vue')
  },
  {
    path: '/tapas',
    name: 'tapas',
    component: () => import( '../components/categories/tapas.vue')
  },
  {
    path: '/combination-dishes',
    name: 'combinationDishes',
    component: () => import( '../components/categories/combinationDishes.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import( '../components/categories/menu.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import( '../components/home.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../components/error.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router';
import PersonalLogin from '../views/LoginView.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: PersonalLogin,
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "HomePath" */ '../views/HomeView.vue'),
  },
  {
    path: '/categories',
    name: 'categories-products',
    component: () => import(/* webpackChunkName: "HomePath" */ '../views/CategoriesProducts.vue'),
  },
  {
    path: '/single-product',
    name: 'single-product',
    component: () => import(/* webpackChunkName: "ProductsPath" */ '../views/SingleProductView.vue'),
  },
  {
    path: '/shopping-cart',
    name: 'shopping-cart',
    component: () => import(/* webpackChunkName: "ProductsPath" */ '../views/ShoppingCartView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

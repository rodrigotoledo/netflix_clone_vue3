// router.js

import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import MovieDetailPage from '@/components/MovieDetailPage.vue';
import LoginPage from '@/components/LoginPage.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/movies/:movieSlug',
    name: 'MovieDetail',
    component: MovieDetailPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// router.js

import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './src/components/HomePage.vue';
import MovieDetailPage from './src/components/MovieDetailPage.vue';

const routes = [
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

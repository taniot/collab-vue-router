import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      component: AppHome,
    },
  ],
});

export { router };

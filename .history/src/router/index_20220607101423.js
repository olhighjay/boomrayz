import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';
import About from '@/views/AboutView.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/manage',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

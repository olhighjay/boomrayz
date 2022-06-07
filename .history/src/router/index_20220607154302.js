import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';
import About from '@/views/AboutView.vue';
import Manage from '@/views/ManageView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/manage',
    alias: '/manage-music',
    name: '/manage',
    component: Manage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/:catchAll(.*.)*',
    redirect: { name: 'home' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'text-yellow-500',
});

router.beforeEach((to, from, next) => {

});
export default router;

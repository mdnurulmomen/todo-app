/* Import Pages */
import Home from '@/pages/Home.vue';
import TaskIndex from '@/pages/TaskIndex.vue';

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', name:'home', component: Home },
    { path: '/tasks', name:'tasks.index', component: TaskIndex }
];

import { createWebHistory, createRouter } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

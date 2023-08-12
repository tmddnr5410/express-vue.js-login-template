import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      title : 'Home '
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta: {
      title : 'Login '
    }
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// View 타이틀 동적 생성
router.afterEach((to, from) => {
  const title = to.meta.title === undefined ? 'FOODY' : to.meta.title;
  if(title) document.title = title;
});

export default router;

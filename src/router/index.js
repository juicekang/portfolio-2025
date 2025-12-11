import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    // 전체 프로젝트 목록 페이지 (새로 추가)
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsList.vue')
    },
    {
      path: '/projects/:id',
      name: 'project-detail',
      component: () => import('../views/ProjectDetail.vue')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // 뒤로가기/앞으로가기 시 이전 스크롤 위치로 복원
    if (savedPosition) {
      return savedPosition
    }
    // 해시 링크가 있으면 해당 위치로 스크롤
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    // 기본적으로 페이지 상단으로 스크롤
    return { top: 0, behavior: 'smooth' }
  }
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: { 
            title: 'بهترین زبان برنامه‌نویسی',
            accent: '#26A69A',
        }
    },
    {
        path: '/:any(.*)',
        redirect: '/',
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to) => {

    let title = to.meta.title || '';

    document.title = title.length > 0 ? title : 'بهترین زبان برنامه‌نویسی';

});

export default router
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: "active",
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue'),
        },
        {
            path: '/poke',
            name: 'poke',
            component: () => import('../views/pokeViews.vue'),
        },
        {
            path: '/pokes/:n',
            name: 'pok',
            component: () => import('../views/PokemView.vue'),
        },
        {
            path: "/:pathMatch(.*)*",
            name: 'NotFound',
            component: () => import('../views/NotFound.vue'),
        },
    ],
});

export default router
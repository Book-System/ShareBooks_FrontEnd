import { createWebHistory, createRouter } from "vue-router";

import Login from '@/components/Login.vue';
import Home from '@/components/Home.vue';
import Join from '@/components/Join.vue';
import Mypage from '@/components/Mypage.vue';
import Myactive from '@/components/Myactive.vue';
import Updatemypage from '@/components/Updatemypage.vue';
import Mypagewriting from '@/components/Mypagewriting.vue';

const routes = [
    { path: '/', name: 'Home', component:Home },
    { path: '/login', name: 'Login', component: Login},
    { path: '/join', name: 'Join', component: Join},
    { path: '/mypage', name: 'Mypage', component: Mypage},
    { path: '/myactive', name: 'Myactive', component: Myactive},
    { path: '/Updatemypage', name: 'Updatemypage', component: Updatemypage},
    { path: '/Mypagewriting', name: 'Mypagewriting', component: Mypagewriting},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
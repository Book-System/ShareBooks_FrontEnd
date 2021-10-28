import { createWebHistory, createRouter } from "vue-router";

import Login from '@/components/Login.vue';
import Home from '@/components/Home.vue';
import Header2 from '@/components/Header2.vue';
import Join from '@/components/Join.vue';
import Mypage from '@/components/Mypage.vue';
import Myactive from '@/components/Myactive.vue';
import Updatemypage from '@/components/Updatemypage.vue';
import Mypagewriting from '@/components/Mypagewriting.vue';
import Register from '@/components/Register.vue';
import Reserve from '@/components/Reserve.vue';
import Slider from '@/components/Slider.vue';
import Slider2 from '@/components/Slider2.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import Chat from '@/components/Chat.vue';
import BookDetail from '@/components/BookDetail.vue';
import BookList from '@/components/BookList.vue';
import BookList2 from '@/components/BookList2.vue';

const routes = [
    { path: '/', name: 'Home', component:Home },
    { path: '/header2', name: 'Header2', component:Header2 },
    { path: '/login', name: 'Login', component: Login},
    { path: '/join', name: 'Join', component: Join},
    { path: '/mypage', name: 'Mypage', component: Mypage},
    { path: '/myactive', name: 'Myactive', component: Myactive},
    { path: '/Updatemypage', name: 'Updatemypage', component: Updatemypage},
    { path: '/Mypagewriting', name: 'Mypagewriting', component: Mypagewriting},
    { path: '/Register', name: 'Register', component: Register},
    { path: '/Reserve', name: 'Reserve', component: Reserve},
    { path: '/Slider', name: 'Slider', component: Slider},
    { path: '/Slider2', name: 'Slider2', component: Slider2},
    { path: '/HelloWorld', name: 'HelloWorld', component: HelloWorld},
    { path: '/Chat', name: 'Chat', component: Chat},
    { path: '/BookDetail', name: 'BookDetail', component: BookDetail},
    { path: '/BookList', name: 'BookList', component: BookList},
    { path: '/BookList2', name: 'BookList2', component: BookList2},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
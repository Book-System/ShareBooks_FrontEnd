import { createWebHistory, createRouter } from "vue-router";

import Login from '@/components/Login.vue';
import Home from '@/components/Home.vue';
import Header2 from '@/components/Header2.vue';
import Join from '@/components/Join.vue';
import Join2 from '@/components/Join2.vue';
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
import Customer from '@/components/Customer.vue';
import Board from '@/components/Board.vue';
import Faq from '@/components/Faq.vue';
import Review from '@/components/Review.vue';
import BoardDetail from '@/components/BoardDetail.vue';
import Home2 from '@/components/Home2.vue';
import Header3 from '@/components/Header3.vue';
import Footer2 from '@/components/Footer2.vue';


const routes = [
    { path: '/home', name: 'Home', component:Home },
    { path: '/header2', name: 'Header2', component:Header2 },
    { path: '/login', name: 'Login', component: Login},
    { path: '/join', name: 'Join', component: Join},
    { path: '/Join2', name: 'Join2', component: Join2},
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
    { path: '/Customer', name: 'Customer', component: Customer},
    { path: '/Board', name: 'Board', component: Board},
    { path: '/Faq', name: 'Faq', component: Faq},
    { path: '/Review', name: 'Review', component: Review},
    { path: '/BoardDetail', name: 'BoardDetail', component: BoardDetail},
    { path: '/', name: 'Home2', component:Home2 },
    { path: '/Header3', name: 'Header3', component:Header3 },
    { path: '/Footer2', name: 'Footer2', component:Footer2 },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
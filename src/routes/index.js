import {createWebHistory, createRouter} from 'vue-router';

// COMPONENT
import MyPage from '@/components/MyPage.vue';
import Login from '@/components/Login.vue';
import Home from '@/components/Home.vue'; 
import Join from '@/components/Join.vue';

// BOOK
import BookReservation from '@/components/BookReservation.vue';
import BookRecommend from '@/components/BookRecommend.vue';
import BookRegister from '@/components/BookRegister.vue';
import BookUpdate from '@/components/BookUpdate.vue';
import BookDetail from '@/components/BookDetail.vue';
import BookPlace from '@/components/BookPlace.vue';
import BookChat from '@/components/BookChat.vue';
import Chart from '@/components/Chart.vue';
import KakaoLogin_callback from '@/components/KakaoLogin_callback.vue'; //카카오로그인추가

// SNS
import BookSns from '@/components/BookSns.vue';

// URL과 컴포넌트 매핑
const routes = [
    // COMPONENT
    { path : '/mypage', name :"MyPage", component : MyPage },
    { path : '/login', name :"Login", component : Login },
    { path : '/join', name :"Join", component : Join },
    { path : '/', name :"Home", component : Home },
    { path : '/kakaologin', name :"KakaoLogin_callback", component :KakaoLogin_callback },//카카오로그인추가

    // BOOK
    { path : '/book/reservation', name :"BookReservation", component : BookReservation },
    { path : '/book/recommend', name :"BookRecommend", component : BookRecommend },
    { path : '/book/register', name :"BookRegister", component : BookRegister },
    { path : '/book/update', name :"BookUpdate", component : BookUpdate },
    { path : '/book/detail', name :"BookDetail", component : BookDetail },
    { path : '/book/place', name :"BookPlace", component : BookPlace },
    { path : '/book/chat', name :"BookChat", component : BookChat },
    { path : '/chart', name :"Chart", component : Chart },

    // SNS
    { path : '/book/sns', name :"BookSns", component : BookSns },

];

// ROUTER
const router = createRouter({
    history : createWebHistory(),
    routes,
});

export default router;
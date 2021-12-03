import { createApp } from 'vue'
import App from './App.vue'

// ROUTER 설정
import router from './routes';

// UI > ElementPlus
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import VueCookies from 'vue3-cookies'

// vue 애니메이션
import AOS from 'aos';
import "aos/dist/aos.css";

// socket.io
// npm install socket.io-client --save
//모듈 가져오기
import io from 'socket.io-client'

import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
dayjs.extend(relativeTime);
dayjs.locale('ko');

// 클라이언트 소켓 생성
const socket = io ("http://127.0.0.1:3000/",
{transports : ['websocket']});



//kakao login 설정
window.Kakao.init('993144c55060b4882193e100e5d23506'); //javascriptkey

const app = createApp(App);

app.config.globalProperties.$socket = socket;
app.config.globalProperties.$dayjs = dayjs;

app.use(AOS.init());
app.use(router);
app.use(ElementPlus);
app.use(VueCookies);
app.mount('#app');








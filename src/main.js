// 파일명: main.js
import { createApp } from 'vue'
import App from './App.vue'

import CKEditor from '@ckeditor/ckeditor5-vue';

// ROUTER
import router from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';




// APP
const app = createApp(App);
app.use(CKEditor);
app.use(router);
app.mount('#app');


window.Kakao.init("57737811b7b6430c26ee1cb456a25327");
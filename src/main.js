// 파일명: main.js
import { createApp } from 'vue'
import App from './App.vue'

// ROUTER
import router from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// APP
const app = createApp(App);
app.use(router);
app.mount('#app');
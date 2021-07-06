import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App);//App.vue를 app으로 생성
app.use(store);//store 사용 선언 이제 this.$store로 접근 가능
app.use(router);//router 사용 선언
app.use(VueAxios,axios);//axios 사용 선언
app.mount('#app');//app을 public의 #app 부분에 마운트하도록 설정


import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/views/Home.vue";
import Login from "@/components/views/Login.vue";
import Signup from "@/components/views/Signup.vue";
import Modify from "@/components/views/Modify.vue";
import Monitor from "@/components/views/Monitor.vue";
import Shell from "@/components/views/Shell.vue";
import Cookie from '../my_modules/myCookie';
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/modify",
    name: "Modify",
    component: Modify,
  },  
  {
    path: "/monitor",
    name: "Monitor",
    component: Monitor,
  },
  {
    path: "/shell",
    name: "Shell",
    component: Shell,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next)=> {
    //home으로 이동하기 전 cookie 확인 후 이동
    const logined = Cookie.getCookie('user') || null;
    if(to.path==='/login' || to.path==='/signup') {
        if(logined) {
            next('/');
        }
        else {
            next();
        }
    }
    else {
        if(logined) {
            next();
        }
        else {
            next('/login');
        }
    }
})

export default router;
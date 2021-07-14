import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/views/Home.vue";
import Login from "@/components/views/Login.vue";
import Signup from "@/components/views/Signup.vue";
import Findpass from "@/components/views/Findpass.vue"
import Modify from "@/components/views/Modify.vue";
import Monitor from "@/components/views/Monitor.vue";
import Shell from "@/components/views/Shell.vue";
import store from "../store"

const requireAuth = (to,from,next) => {
  if(!!store.state['accessToken']) next();
  else next('/login');
} 
const requireNonAuth = (to,from,next) => {
  if(!store.state['accessToken']) next();
  else next(from.path);
}
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: requireAuth
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: requireNonAuth
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    beforeEnter: requireNonAuth
  },
  {
    path: "/findapss",
    name: "Findpass",
    component: Findpass,
    beforeEnter: requireNonAuth
  },
  {
    path: "/modify",
    name: "Modify",
    component: Modify,
    beforeEnter: requireAuth
  },  
  {
    path: "/monitor",
    name: "Monitor",
    component: Monitor,
    beforeEnter: requireAuth
  },
  {
    path: "/shell",
    name: "Shell",
    component: Shell,
    beforeEnter: requireAuth
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

/*
router.beforeEach((to, from, next)=> {
    //home으로 이동하기 전 
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
*/
export default router;
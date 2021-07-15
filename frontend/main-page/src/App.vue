<template>
    <header id="header">
        <h1 class="title">
          {{$route.name}}
        </h1>
        <button @click="logout">로그아웃</button>
        <router-link to="/modify">회원정보</router-link>
    </header>
    <main>
      <!-- <aside v-if="$route.path !== '/login'" id="left-aside">
        <RouteLeftButton @click="gotoLeftRoute"></RouteLeftButton>
      </aside> -->
      <router-view id="view" v-slot="{ Component }">
        <transition name="slide">
          <component :is="Component"/>
        </transition>
      </router-view>
      <!-- <aside v-if="$route.path !== '/login'" id="right-aside">
        <RouteRightButton @click="gotoRightRoute"></RouteRightButton>
      </aside> -->
    </main>
    <footer>
      <RouteDot v-if="$route.path !== '/login'" :routes="routeList"></RouteDot>
    </footer>
</template>

<script>
import Cookie from './my_modules/myCookie'
import RouteDot from './components/widget/RouteDot.vue'
import { mapState,mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    RouteDot,
  },
  computed: {
    ...mapState([
      "routeList"
    ])
  },
  methods: {
    ...mapActions(['requestLogout']),
    gotoLeftRoute() {
      const lastIndex = this.routeList.length-1;
      const currentIndex = this.routeList.indexOf(this.$route.path);
      let nextIndex = currentIndex-1;
      if(nextIndex < 0) {
        nextIndex = lastIndex;
      }
      const nextPath = this.routeList[nextIndex];
      this.$router.push({ path: `${nextPath}`});
    },
    gotoRightRoute() {
      const lastIndex = this.routeList.length-1;
      const currentIndex = this.routeList.indexOf(this.$route.path);
      let nextIndex = currentIndex+1;
      if(nextIndex > lastIndex) {
        nextIndex = nextIndex%(lastIndex+1);
      }
      const nextPath = this.routeList[nextIndex];
      this.$router.push({ path: `${nextPath}`});
    },
    async logout() {
      try {
          const response = await this.requestLogout();
          if(response.status === 200) {
            this.$router.push('/login');
          }
      }
      catch(error) {
          console.error('logout failed:',error);
      }
    },
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100vh;
  width:100vw;
  display:flex;
  flex-direction:column;
}
html,body {
  margin:0;
}
header {
  height:60px;
  background-color:#FF6976;
  display:flex;
  flex-direction:row;
  justify-content: flex-end;
}
header .title {
  position:absolute;
  width:200px;
  height:40px;
  left:50%;
  margin-left:-100px;
  margin-top:10px;
  margin-bottom:10px;
}
main {
  position:relative;
  display:flex;
  flex-direction:row;
  justify-content: center;
  height:800px;
  width:800px;
  left:50%;
  margin-left:-400px;
  overflow:hidden;
}
aside {
  position:absolute;
  width:100px;
  height:100%;
  z-index:100;
  
}
aside#left-aside {
  left:0;
}
aside#right-aside {
  right:0;
}
footer {
  height:100px;
  display:flex;
  justify-content: center;
}
#view {
  position:absolute;
  box-sizing:border-box;
  height:100%;
  width:800px;
  padding:20px;
}
.card {
  border-radius:4px;
  box-shadow:0 3px 6px 0 rgba(33,33,33,0.3);
}
/* slide transition css */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease-out;
}
.slide-enter-to,
.slide-enter-from,
.slide-leave-to,
.slide-leave-from {
  position: absolute;
}
.slide-enter-to {
  left:0;
}
.slide-enter-from {
  left:100%;
}
.slide-leave-to {
  left: -100%;
}
.slide-leave-from {
  left:0;
}
</style>
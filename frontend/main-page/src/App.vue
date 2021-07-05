<template>
    <header id="header">
      
    </header>
    <main>
      <aside id="left-aside">
        <RouteLeftButton @click="gotoLeftRoute"></RouteLeftButton>
      </aside>
      <router-view id="view" v-slot="{ Component }">
        <transition name="slide">
          <component :is="Component"/>
        </transition>
      </router-view>
      <aside id="right-aside">
        <RouteRightButton @click="gotoRightRoute"></RouteRightButton>
      </aside>
    </main>
    <footer>
      <RouteDot :routes="routeList"></RouteDot>
    </footer>
</template>

<script>
import RouteLeftButton from './components/widget/RouteLeftButton.vue'
import RouteRightButton from './components/widget/RouteRightButton.vue'
import RouteDot from './components/widget/RouteDot.vue'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    RouteLeftButton,
    RouteRightButton,
    RouteDot
  },
  computed: {
    ...mapState([
      "routeList"
    ])
  },
  methods: {
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
    }
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
}
main {
  position:relative;
  display:flex;
  flex-direction:row;
  height:700px;
  overflow:hidden;
}
aside {
  position:absolute;
  width:100px;
  height:100%;
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
  box-sizing:border-box;
  height:100%;
  width:100%;
  padding:20px 100px;
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
  right:0;
}
.slide-enter-from {
  right:-100%;
}
.slide-leave-to {
  left: -100%;
}
.slide-leave-from {
  left:0;
}
</style>
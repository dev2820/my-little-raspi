<template>
  <div>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
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
  margin-top: 60px;
}
html,body {
  height:100vh;
  width:100vw;
  overflow:hidden;
  margin:0;
}
.view {
  margin:50px;
  padding:30px;
}
.card {
  border-radius:4px;
  box-shadow:0 3px 6px 0 rgba(33,33,33,0.3);
}
</style>

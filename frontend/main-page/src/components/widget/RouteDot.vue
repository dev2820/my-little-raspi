<template>
    <div id="route-dot">
        <router-link 
            v-for="(path,index) in routes"
            :key="index" 
            :class="{'current':currentRoute===path ? true : false}" 
            :to="path"
        >●</router-link>
    </div>
</template>
<script>
export default {
    props: {
        routes: {
            default: ['/']
        }
    },
    computed: {
        currentRoute(){
            return this.$route.path;
        }
    }
}
</script>
<style lang="scss" scoped>
#route-dot {
    width:50px;
    display:flex;
    flex-direction:row;
    justify-content: space-around;
}
#route-dot a{
    font-size:1.1rem;
    text-decoration: none;
    color:#cccccc;
}
#route-dot a:visited {
    color:#cccccc;
}
#route-dot a.current {
    color:#333333;
}
</style>
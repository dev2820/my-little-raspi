<template>
    <div>
        <h1>Home</h1>
        <button @click="logout()">로그아웃</button>
        <router-link to="/modify">회원정보</router-link>
        <app-link href="/modify" :src="icon" title="go to modify">modify</app-link>
        <Clock class="clock" :time="nowTime"/>
    </div>
</template>

<script>
import Cookie from '../../my_modules/myCookie'
import AppLink from '../widget/CommonAppLink.vue'
import Clock from '../widget/CommonClock.vue'
export default {
    name:"Home",
    data() {
        return {
            id:"",
            password:"",
            nowTime: new Date(),
            icon: require('@/assets/images/config-icon.png')
        }
    },
    components:{
        AppLink,
        Clock
    },
    methods: {
        logout() {
            try {
                Cookie.deleteCookie('user');
                this.$router.push('/login');
            }
            catch(error) {
                console.error('logout failed:',error);
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.clock {
    left:300px;
    top:100px;
}
</style>

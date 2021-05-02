<template>
    <div>
        <header>
            <h1>Home</h1>
            <button @click="logout()">로그아웃</button>
            <router-link to="/modify">회원정보</router-link>
        </header>
        <main>
            Home
        </main>
        <footer>

        </footer>
    </div>
</template>

<script>
import Cookie from '../../my_modules/myCookie'
export default {
    name:"Home",
    data() {
        return {
            id:"",
            password:""
        }
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
        }
    }
}
</script>

<style lang="scss" scoped>
    form {
        background-color:green;
    }
</style>

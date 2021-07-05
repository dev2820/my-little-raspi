<template>
    <div>
        <h1>Modify</h1>
        <button @click="logout()">logout</button>
        <router-link to="/">Home</router-link>
        회원정보/정보변경
        <modify-user-info class="card"></modify-user-info>
        <modify-password class="card"></modify-password>
        <signout class="card" @logout="logout"></signout>
    </div>
</template>

<script>

import Cookie from '../../my_modules/myCookie'
import ModifyUserInfo from '../container/ModifyUserInfo'
import ModifyPassword from '../container/ModifyPassword'
import Signout from '../container/Signout'
export default {
    name:"Modify",
    data() {
        return {}
    },
    components: {
        ModifyUserInfo,
        ModifyPassword,
        Signout
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
    div.form {
        display:flex;
        flex-direction:column;
    }
</style>
<template>
    <div>
        <header>
            <h1>Modify</h1>
            <button @click="logout()">logout</button>
            <router-link to="/">Home</router-link>
        </header>
        <main>
            회원정보/정보변경
            <modify-user-info class="card"></modify-user-info>
            <modify-password class="card"></modify-password>
            <signout class="card" @logout="logout"></signout>
        </main>
        <footer>

        </footer>
    </div>
</template>

<script>

import Cookie from '../../my_modules/myCookie'
import ModifyUserInfo from '../modules/ModifyUserInfo'
import ModifyPassword from '../modules/ModifyPassword'
import Signout from '../modules/Signout'
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
        passwordEqualCheck(password,passwordAgain) {
            if(!password) { 
                throw new Error("비밀번호를 입력해 주십시오.");
            }
            else if(password !== passwordAgain) { 
                throw new Error("비밀번호가 일치하지 않습니다.");
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    div.form {
        display:flex;
        flex-direction:column;
    }
</style>
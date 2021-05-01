<template>
    <div>
        <header>
            <h1>Modify</h1>
            <button @click="logout()">logout</button>
            <router-link to="/">Home</router-link>
        </header>
        <main>
            <div class="form">
                <label>user: <input type="text" name="id" v-model="id" readonly></label>
                <label>name: <input type="text" name="name" v-model="name"></label>
                <label>email: <input type="text" name="email" v-model="email"></label>
                <label>new password:<input type="password" name="password" v-model="password"></label>
                <label>new password again:<input type="password" name="password" v-model="passwordAgain"></label>
                <button @click="requestModifyUserInfo({id,name,email,password,passwordAgain},successModify,failedModify)">정보 변경</button>{{requestStatus}}
            </div>
        </main>
        <footer>

        </footer>
    </div>
</template>

<script>

import Cookie from '../../my_modules/myCookie'
export default {
    name:"Modify",
    data() {
        return {
            id:"",
            name:"",
            password:"",
            passwordAgain:"",
            email:"",
            requestStatus:""
        }
    },
    mounted() {
        const success = (info) => {
            this.id = info.id;
            this.name = info.name;
            this.email = info.email;
        }
        const failed = () => {
            confirm('유저 정보를 불러오지 못했어요.')
        }  
        this.requestUserInfo(success,failed);
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
        async requestUserInfo(success,failed) {
            const info = {};
            try {
                const response = await this.$store.dispatch('requestUserInfo');
                success(response.data);
            }
            catch (error) {
                failed();
                console.error('logout failed:',error);
            }
            return info;
        },
        async requestModifyUserInfo(info,success,failed) {
            this.requestStatus = "ongoing";
            try {
                const isPasswordEqual = this.passwordEqualCheck(info.password,info.passwordAgain);
                if(isPasswordEqual === false) { throw new Error('password is not equal'); }
                const data = {
                    id:info.id,
                    name:info.name,
                    password:info.password,
                    email:info.email
                }
                const response = await this.$store.dispatch('requestSignup', data);
                if(response.status === 201) {
                    success();
                }
            }
            catch(error){
                failed();
                console.error('modify failed:',error);
            }
        },
        passwordEqualCheck(password,passwordAgain) {
            if(!password) {
                confirm("비밀번호를 입력해 주십시오.");
                return false;
            }
            else if(password !== passwordAgain) {
                confirm("비밀번호가 일치하지 않습니다.");
                return false;
            }
            else { 
                return true;
            }
        },
        successModify() {
            this.requestStatus = "success";
            this.$router.push({ path:'/'});
        },
        failedModify() {
            this.requestStatus = "failed";
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
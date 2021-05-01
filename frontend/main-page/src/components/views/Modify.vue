<template>
    <div>
        <header>
            <h1>Modify</h1>
            <button @click="logout()">logout</button>
            <router-link to="/">Home</router-link>
        </header>
        <main>
            <div class="form">
                사용자 정보
                <label>user: <input type="text" name="id" v-model="id" readonly></label>
                <label>name: <input type="text" name="name" v-model="name"></label>
                <label>email: <input type="text" name="email" v-model="email"></label>
                <button @click="requestModifyUserInfo({id,name,email},successModifyInfo,failedModifyInfo)">변경</button>{{requestModifyInfoStatus}}
            </div>
            <div class="form">
                비밀번호 변경
                <label>old password:<input type="password" name="password" v-model="oldPassword"></label>
                <label>new password:<input type="password" name="password" v-model="newPassword"></label>
                <label>new password again:<input type="password" name="password" v-model="passwordAgain"></label>
                <button @click="requestModifyPassword({oldPassword,newPassword,passwordAgain},successModifyPw,failedModifyPw)">변경</button>{{requestModifyPwStatus}}
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
            oldPassword:"",
            newPassword:"",
            passwordAgain:"",
            email:"",
            requestModifyInfoStatus:"",
            requestModifyPwStatus:""
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
            try {
                const response = await this.$store.dispatch('requestUserInfo');
                success(response.data);
            }
            catch (error) {
                failed();
                console.error('logout failed:',error);
            }
        },
        async requestModifyUserInfo(info,success,failed) {
            this.requestStatus = "ongoing";
            try {
                const data = {
                    name:info.name,
                    email:info.email
                }
                const response = await this.$store.dispatch('requestModifyUserInfo', data);
                if(response.status === 201) {
                    success();
                }
            }
            catch(error){
                failed(error.message);
                console.error('modify failed:',error);
            }
        },
        async requestModifyPassword(info,success,failed) {
            this.requestStatus = "ongoing";
            try {
                const isPasswordEqual = this.passwordEqualCheck(info.newPassword,info.passwordAgain);
                if(isPasswordEqual === false) { throw new Error('password is not equal'); }
                const data = {
                    password:info.oldPassword,
                    newPassword:info.newPassword
                }
                const response = await this.$store.dispatch('requestModifyPassword', data);
                if(response.status === 201) {
                    success();
                }
            }
            catch(error){
                failed(error.message);
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
        successModifyInfo() {
            this.requestModifyInfoStatus = "success";
        },
        failedModifyInfo(message) {
            confirm(message);
            this.requestModifyInfoStatus = "failed";
        },
        successModifyPw() {
            this.requestModifyPwStatus = "success";
        },
        failedModifyPw(message) {
            confirm(message);
            this.requestModifyPwStatus = "failed";
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
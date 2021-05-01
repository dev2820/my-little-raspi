<template>
    <div>
        <header>
            <h1>Signup</h1>
            <router-link to="/">Home</router-link>
        </header>
        <main>
            signup {{requestStatus}}
            <div class="form">
                <label>
                    이름
                    <input type="text" name="name" v-model="name">
                </label>
                <label>
                    아이디
                    <input type="text" name="id" v-model="id">
                    <button @click="requestUniqueIdCheck(id,successUniqueIdCheck,failedUniqueIdCheck)">중복확인</button>
                </label>
                <label>
                    비밀번호
                    <input type="password" name="password" v-model="password">
                </label>
                <label>
                    비밀번호 재확인
                    <input type="password" v-model="passwordAgain">
                    <p v-if="password!=='' && password!==passwordAgain">비밀번호가 일치하지 않습니다.</p>
                </label>
                <label>
                    이메일
                    <input type="email" name="email" v-model="email">
                </label>
                <button @click="requestSignup({name,id,password,passwordAgain,email},successSignup,failedSignup)">signup</button>
            </div>
        </main>
        <footer>
            footer
        </footer>
    </div>
</template>

<script>

export default {
    name:"Signup",
    data() {
        return {
            name:"",
            id:"",
            password:"",
            passwordAgain:"",
            email:"",
            requestStatus:"",
            isUniqueId:false
        }
    },
    methods: {
        async requestUniqueIdCheck(id,success,failed) {
            try {
                const response = await this.$store.dispatch('requestUniqueIdCheck', id);
                if(response.status === 201) {
                    success('사용 가능한 아이디입니다!');
                }
            }
            catch(error){
                failed('사용 불가능한 아이디입니다.');
            }
        },
        successUniqueIdCheck() {
            if(message) confirm(message);
            this.isUniqueId = true;
        },
        failedUniqueIdCheck() {
            if(message) confirm(message);
            this.isUniqueId = false;
        },
        async requestSignup(info,success,failed) {
            this.requestStatus = "ongoing";
            try {
                this.passwordEqualCheck(info.password,info.passwordAgain);
                if(this.isUniqueId === false) {
                    throw new Error('아이디 중복을 확인해 주십시오.'); 
                }
                const data = {
                    name:info.name,
                    id:info.id,
                    password:info.password,
                    email:info.email
                }
                const response = await this.$store.dispatch('requestSignup', data)
                if(response.status === 201) {
                    success();
                }
            }
            catch(error){
                if(error.response) failed(error.response.data.message);
                else failed(error.message);
            }
        },
        passwordEqualCheck(password,passwordAgain) {
            if(!password) {
                throw new Error("비밀번호를 입력해 주십시오.");
            }
            else if(password !== passwordAgain) {
                throw new Error("비밀번호가 일치하지 않습니다.");
            }
        },
        successSignup(){
            this.requestStatus = "success";
            if(message) confirm(message);
            this.$router.push({ path:'/'});
        },
        failedSignup(message){
            if(message) confirm(message);
            this.requestStatus = "failed";
        }
    }
}
</script>

<style lang="scss" scoped>
    div.form {
        display:flex;
        flex-direction:column;
        height:50%;
    }
</style>

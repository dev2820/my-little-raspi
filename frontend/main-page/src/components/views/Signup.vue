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
                    success();
                }
            }
            catch(error){
                failed();
            }
        },
        successUniqueIdCheck() {
            confirm('사용 가능한 아이디입니다!');
            this.isUniqueId = true;
        },
        failedUniqueIdCheck() {
            confirm('사용 불가능한 아이디입니다.');
            this.isUniqueId = false;
        },
        async requestSignup(info,success,failed) {
            this.requestStatus = "ongoing";
            try {
                const isPasswordEqual = this.passwordEqualCheck(info.password,info.passwordAgain);
                if(isPasswordEqual === false) { 
                    throw new Error('password is not equal'); 
                }
                if(this.isUniqueId === false) {
                    confirm('아이디 중복을 확인해 주십시오.');
                    throw new Error('duplicated id'); 
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
                failed();
                console.error('signup failed:',error);
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
        successSignup(){
            this.requestStatus = "success";
            this.$router.push({ path:'/'});
        },
        failedSignup(){
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

<template>
    <div>
        <header>
            <h1>Signup</h1>
            <router-link to="/">Home</router-link>
        </header>
        <main>
            signup
            <div class="form">
                <label>
                    이름
                    <input type="text" name="name" v-model="name">
                </label>
                <label>
                    아이디
                    <input type="text" name="id" v-model="id">
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
                <button @click="signup({name,id,password,passwordAgain,email})">signup</button>
            </div>
        </main>
        <footer>

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
            loginStatus:""
        }
    },
    methods: {
        async signup(info) {
            if(info.passwordAgain !== info.password) {
                confirm("비밀번호가 일치하지 않습니다.");
                return;
            }
            try {
                this.loginStatus = "ongoing";
                const data = {
                    name:info.name,
                    id:info.id,
                    password:info.password,
                    email:info.email
                }
                const response = await this.$store.dispatch('requestSignup', data)
                if(response.status < 400) {
                    this.loginStatus = "success";
                    this.$router.push({ path:'/'});
                }
                else {
                    this.loginStatus = "failed";
                }
            }
            catch(error){
                console.error('signup failed:',error);
            }
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

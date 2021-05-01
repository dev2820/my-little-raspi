<template>
    <div class="card">
        <header>
            <h1>login</h1>
            <router-link to="/signup">signup</router-link>
            {{loginStatus}}
        </header>
        <main>
            <div class="form">
                <input id="id" v-model="id">
                <input id="pw" type="password" v-model="password">
                <button @click="requestLogin({id,password},successLogin,failedLogin)">submit</button>
            </div>
        </main>
        <footer>

        </footer>
    </div>
</template>

<script>

export default {
    name:"Login",
    data() {
        return {
            id:"",
            password:"",
            loginStatus:""
        }
    },
    methods: {
        successLogin() {
            this.loginStatus = "";
            this.$router.push({ path:'/'});
        },
        failedLogin() {
            this.loginStatus = "failed";
        },
        async requestLogin(info,success,failed) {
            this.loginStatus = "ongoing";
            try {
                const response = await this.$store.dispatch('requestLogin',info);
                if(response.status === 201) {
                    success();
                }
            }
            catch (error) {
                failed();
                console.error('login failed:',error);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    main {
        padding:30px;
    }
    div.form {
        display:flex;
        flex-direction:column;
        height:50vh;
    }
</style>

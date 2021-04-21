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
                <button @click="login(id,password)">submit</button>
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
        async login(id,password) {
            try {
                const response = await this.$http.post('/login', {id,password});
                this.$router.push({ path: '/' });
            }
            catch(error){
                this.loginStatus="failed";
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

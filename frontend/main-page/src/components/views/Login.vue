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
            this.loginStatus = "ongoing";
            const response = await this.$store.dispatch('requestLogin',{id,password});
            if(response.status < 400) {
                this.loginStatus = "success";
                setTimeout(()=>{
                    this.$router.push({ path:'/'});
                },1000);
            }
            else {
                this.loginStatus = "failed";
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

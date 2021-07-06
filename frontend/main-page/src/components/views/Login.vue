<template>
    <div class="card">
        <router-link to="/signup">signup</router-link>
        {{loginStatus}}
        <div class="form">
            <input id="id" v-model="id">
            <input id="pw" type="password" v-model="password">
            <button @click="requestLogin({id,password},success,failed)">submit</button>
        </div>
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
        success(message) {
            this.loginStatus = "success";
            if(message) { confirm(message); }
            this.$router.push({ path:'/'});
        },
        failed(message) {
            this.loginStatus = "failed";
            if(message) { confirm(message); }
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
                if(error.response) failed(error.response.data.message);
                else failed(error.message);
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

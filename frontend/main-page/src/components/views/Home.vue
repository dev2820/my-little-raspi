<template>
    <div>
        <header>
            <h1>Home</h1>
            <button @click="logout()"></button>
        </header>
        <main>
            Here is Home. what can i do here?
        </main>
        <footer>

        </footer>
    </div>
</template>

<script>

export default {
    name:"Home",
    data() {
        return {
            id:"",
            password:""
        }
    },
    methods: {
        async logout() {
            try {
                const response = await this.$http.post('/logout');
                if(response.status===200) {
                    this.$router.push({ path:'/login'});
                }
            }
            catch(error) {
                console.error('logout failed:',error);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    form {
        background-color:green;
    }
</style>

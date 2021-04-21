<template>
    <div>
        <header>
            <h1>Modify</h1>
            <router-link to="/">Home</router-link>
        </header>
        <main>
            <form>
                <label for="input[name=id]">user</label>user: <input type="text" name="id" v-model="value" readonly><br/>
                new password:<input type="password" name="password"><br/>
                name: <input type="text" name="name" value="<%=name%>"><br/>
                email: <input type="text" name="email" value="<%=email%>"><br/>
            </form>
        </main>
        <footer>

        </footer>
    </div>
</template>

<script>

export default {
    name:"Modify",
    data() {
        return {
            id:"",
            password:""
        }
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
    form {
        background-color:green;
    }
</style>
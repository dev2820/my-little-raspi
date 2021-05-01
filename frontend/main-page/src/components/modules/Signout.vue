<template>
    <div class="form">
        회원탈퇴
        <label>password:<input type="password" name="password" v-model="password"></label>
        <button @click="requestSignout({password},success,failed)">회원탈퇴</button>{{requestStatus}}
    </div>
</template>

<script>
export default {
    name: "Signout",
    data() {
        return {
            password:"",
            requestStatus:"",
        }
    },
    methods: {
        async requestSignout(info,success,failed) {
            this.requestStatus = "ongoing";
            try {
                const data = {
                    password:info.password,
                }
                const response = await this.$store.dispatch('requestSignout', data);
                if(response.status === 201) {
                    success();
                }
            }
            catch(error){
                if(error.response) failed(error.response.data.message);
                else failed(error.message);
            }
        },
        success() {
            this.requestStatus = "success";
            this.$emit('logout');
        },
        failed(message) {
            confirm(message);
            this.requestStatus = "failed";
        },
    }
}
</script>

<style>

</style>
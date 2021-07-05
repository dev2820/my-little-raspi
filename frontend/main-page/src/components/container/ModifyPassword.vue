<template>
    <div class="form">
        비밀번호 변경
        <label>old password:<input type="password" name="password" v-model="oldPassword"></label>
        <label>new password:<input type="password" name="password" v-model="newPassword"></label>
        <label>new password again:<input type="password" name="password" v-model="passwordAgain"></label>
        <button @click="requestModifyPassword({oldPassword,newPassword,passwordAgain},success,failed)">변경</button>{{requestStatus}}
    </div>
</template>

<script>
export default {
    name: "ModifyPassword",
    data() {
        return {
            oldPassword:"",
            newPassword:"",
            passwordAgain:"",
            requestStatus:""
        }
    },
    methods: {
        async requestModifyPassword(info,success,failed) {
            this.requestStatus = "ongoing";
            try {
                this.passwordEqualCheck(info.newPassword,info.passwordAgain);
                const data = {
                    oldPassword:info.oldPassword,
                    newPassword:info.newPassword
                }
                const response = await this.$store.dispatch('requestModifyPassword', data);
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
        },
        failed(message) {
            confirm(message);
            this.requestStatus = "failed";
        },
        passwordEqualCheck(password,passwordAgain) {
            if(!password) { 
                throw new Error("비밀번호를 입력해 주십시오.");
            }
            else if(password !== passwordAgain) { 
                throw new Error("비밀번호가 일치하지 않습니다.");
            }
        }
    }
}
</script>

<style>

</style>
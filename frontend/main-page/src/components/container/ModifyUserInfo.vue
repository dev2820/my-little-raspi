<template>
    <div class="form">
        <strong>{{userInfo.name || ''}}({{userInfo.id  || ''}}) 님의 사용자 정보</strong>
        <label>user: <input type="text" name="id" v-model="id" readonly></label>
        <label>name: <input type="text" name="name" v-model="name"></label>
        <label>email: <input type="text" name="email" v-model="email"></label>
        <button @click="requestModifyUserInfo({id,name,email},success,failed)">변경</button>{{requestStatus}}
    </div>
</template>

<script>
export default {
    name: "ModifyUserInfo",
    data() {
        return {
            userInfo: {},
            id:"",
            name:"",
            email:"",
            requestStatus:""
        }
    },
    mounted() {
        this.initUserInfo();
    },
    methods: {
        initUserInfo() {
            const success = (info) => {
            this.userInfo = info;
            this.id = info.id;
            this.name = info.name;
            this.email = info.email;
            }
            const failed = () => {
                confirm('유저 정보를 불러오지 못했어요.')
            }  
            this.requestUserInfo(success,failed);
        },
        async requestUserInfo(success,failed) {
            try {
                const response = await this.$store.dispatch('requestUserInfo');
                success(response.data);
            }
            catch (error) {
                failed(error.message);
            }
        },
        async requestModifyUserInfo(info,success,failed) {
            this.requestModifyInfoStatus = "ongoing";
            try {
                const data = {
                    name:info.name,
                    email:info.email
                }
                const response = await this.$store.dispatch('requestModifyUserInfo', data);
                if(response.status === 201) {
                    success();
                }
            }
            catch(error){
                failed(error.message);
            }
        },
        success() {
            this.requestStatus = "success";
            this.initUserInfo();
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
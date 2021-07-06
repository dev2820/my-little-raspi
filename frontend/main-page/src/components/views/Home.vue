<template>
    <div class="home-page">
        <AppLinkBox class="link-box">
            <AppLink class="link" href="/modify" :src="icon" title="go to modify">modify</AppLink>
        </AppLinkBox>
        <Clock class="clock" :time="nowTime"/>
    </div>
</template>

<script>
import AppLink from '../widget/CommonAppLink.vue'
import AppLinkBox from '../widget/CommonAppLinkBox.vue'
import Clock from '../widget/CommonClock.vue'
export default {
    name:"Home",
    data() {
        return {
            id:"",
            password:"",
            nowTime: new Date(),
            icon: require('@/assets/images/config-icon.png')
        }
    },
    components:{
        AppLinkBox,
        AppLink,
        Clock
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
.home-page {
    position:absolute;
    display:flex;
    flex-direction:column;
    justify-content: flex-start;
}
.clock {
    left:50%;
    margin-left: -100px;
    top:100px;
}
.link-box {
    position:relative;
    box-sizing:border-box;
}
</style>

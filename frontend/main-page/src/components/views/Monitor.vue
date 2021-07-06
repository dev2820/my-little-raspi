<template>
    <div>
        <Clock :time="nowTime"/>
    </div>
</template>

<script>
import Clock from '@/components/widget/CommonClock.vue'
export default {
    name:"Monitor",
    data() {
        return {

        }
    },
    components:{
        Clock
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
</style>

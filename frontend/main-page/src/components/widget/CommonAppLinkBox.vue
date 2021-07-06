<template>
    <div class="common-app-link-box">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'CommonAppLinkBox',
    props: {


    },
}
</script>

<style scoped>
div.common-app-link-box {
    position:relative;
    top:500px;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content: center;
    border-radius:16px;
    padding:10px;
}
</style>

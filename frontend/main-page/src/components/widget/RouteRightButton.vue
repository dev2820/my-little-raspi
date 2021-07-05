<template>
    <button class="route-button" @click="handleOnClick">
        <svg
            class="triangle right"
            width="48" height="55" viewBox="0 0 48 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M45.1636 30.9904L6.05303 54.3801C3.38684 55.9745 0 54.0537 0 50.9471L0 4.93469C0 1.85405 3.33614 -0.0702744 6.0028 1.47221L45.1134 24.095C47.7539 25.6224 47.7816 29.4247 45.1636 30.9904Z" fill="black"/>
        </svg>
    </button>
</template>
<script>
export default {
    name: 'RouteRightButton',
    props:{
        direct:{
            type: String,
            default: 'left',
            validator: (value)=>{
                return ['left','right'].indexOf(value) !== -1;
            }
        }
    },
    handleOnClick(){
        this.$emit('click');
    }
}
</script>

<style scoped>
button.route-button {
    opacity:0;
    position:absolute;
    border:0;
    border-radius:8px;
    background:rgba(0,0,0,0.2);
    width:80px;
    height:600px;
    top:50%;
    margin-top:-300px;
    left:50%;
    margin-left:-40px;
    padding:0;
    box-sizing:border-box;
    overflow:hidden;
    cursor:pointer;
    transition:0.2s;
}
button.route-button:focus {
    outline:0;
}
button.route-button:hover {
    transition:0.2s;
    opacity:1;
}
svg.triangle path {
    fill:rgba(255,255,255,0.7);
}
</style> 
<template>
    <button class="route-button" @click="handleOnClick">
        <svg
            class="triangle left"
            width="48" height="55" viewBox="0 0 48 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.83641 24.0096L41.947 0.619945C44.6132 -0.97454 48 0.946284 48 4.05288V50.0653C48 53.146 44.6639 55.0703 41.9972 53.5278L2.88663 30.905C0.24607 29.3776 0.218375 25.5753 2.83641 24.0096Z" fill="black"/>
        </svg>
    </button>
</template>
<script>
export default {
    name: 'RouteLeftButton',
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
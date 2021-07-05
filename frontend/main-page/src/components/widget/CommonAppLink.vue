<template>
    <div class="common-app-link">
        <a :href="href" :title="title">
            <img :src="src"/>
            <slot></slot>
        </a>
    </div>
</template>

<script>
export default {
    name: 'CommonAppLink',
    props: {
        href: {
            type: String,
            required: true
        },
        src: {
            type: String,
            required: true
        },
        title: {
            type: String
        }

    },
}
</script>

<style scoped>
a {
    display:inline-flex;
    flex-direction:column;
    box-sizing:border-box;
    text-decoration:none;
}
a > img {
    width:auto;
    height:100%;
    background:transparent;
    width:64px;
    height:64px;
    border-radius:30%;
    padding:10px;
    margin-bottom:10px;
    box-shadow: 0px 4px 4px 1px rgba(0,0,0,0.35);
    transition:0.2s;
}
a > img:hover {
    transform:translateY(-4px);
    box-shadow: 0px 4px 4px 1px rgba(0,0,0,0.35);
    transition:0.2s;
}
</style>

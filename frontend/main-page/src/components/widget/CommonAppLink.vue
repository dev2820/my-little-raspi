<template>
    <div class="common-app-link">
        <router-link class="link" :to="href" :title="title">
            <img class="card" :src="src"/>
            <slot></slot>
        </router-link>
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
.link {
    display:inline-flex;
    flex-direction:column;
    box-sizing:border-box;
    text-decoration:none;
    margin:0px 5px;
}
.link > img {
    width:auto;
    height:100%;
    background:transparent;
    width:64px;
    height:64px;
    border-radius:24px;
    padding:10px;
    margin-bottom:10px;
}
.card {
    box-shadow: 0px 4px 4px 1px rgba(0,0,0,0.35);
    transition:0.2s;
}
.card:hover {
    transform:translateY(-4px);
    box-shadow: 0px 4px 4px 1px rgba(0,0,0,0.35);
    transition:0.2s;
}
</style>

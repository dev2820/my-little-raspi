<template>
    <div class="command-line">
        <div class="command">
            $){{log.command}}
        </div>
        <div class="response" v-html="responseHtml"></div>
    </div>
</template>

<script>
export default {
    name:'CommandLine',
    props: {
        log:{
            type: Object,
            default() {
                return {
                    command:'',
                    response:''
                }
            },
            validator(value) {
                return value['command'] && value['response'];
            }
        }
    },
    computed: {
        responseHtml(){
            return this.log.response.replace(/\n/g, "<br/>") 
        }
    }
}
</script>

<style scoped>
.command-line {
    width:100%;
}
.command,.response {
    text-align:left;
}
textarea.response {
    outline:none;
    border:none;
    resize:none;
    width:100%;
}
</style>
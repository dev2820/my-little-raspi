<template>
    <div class="command-line">
        <div class="command" v-for="(command,index) in commands" :key="index">
            <span class="prompt">{{index===0?'$':'>'}}</span>{{command}}
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
                    stdout:'',
                    stderr:''
                }
            },
            validator(value) {
                return value['command'] && (value['stdout'] || value['stderr']);
            }
        }
    },
    computed: {
        commands() {
            return this.log.command.split('\r\n')
        },
        responseHtml(){
            return this.log.stdout.replace(/\n/g, "<br/>") 
        }
    }
}
</script>

<style lang="scss" scoped>
*::selection {
    color:#121212;
    background: var(--primmary-color);
}
.command-line {
    margin-bottom:10px;
    width:100%;
    background-color: var(--background-color);
    color: var(--foreground-color);
    .command,.response {
        text-align:left;
        font-size:1.02rem;
    }
    .command {
        .prompt {
            color: var(--primmary-color);
            margin-right:5px;
        }
    }
    
}

</style>
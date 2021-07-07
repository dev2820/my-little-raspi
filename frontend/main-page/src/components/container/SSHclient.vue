<template>
    <div class="ssh-client">
        <div class="shell" ref="command-output">
            <CommandLine v-for="(log,index) in SSHlogs" :key="index" :log="log"/>
        </div>
        <input type="text" ref="command-input" :value="command"/>
        <button @click="execCommand($e)">commit</button>
    </div>
</template>

<script>
import { mapState,mapActions,mapMutations } from 'vuex'
import CommandLine from '@/components/widget/CommandLine.vue'
export default {
    name: 'SSHclient',
    data() {
        return {
            command: "",
            logs:[]
        }
    },
    components: {
        CommandLine
    },
    computed: {
        ...mapState([
        "SSHlogs"
        ])
    },
    methods: {
        ...mapMutations(['unshiftSSHlogs']),
        ...mapActions(['requestExecCommand']),
        async execCommand(e) {
            const command = this.$refs['command-input'].value;
            try {
                const res = await this.requestExecCommand({command});
                if(res.status==200){
                    console.log()
                    this.unshiftSSHlogs({
                        time: res.headers.date,
                        command:command,
                        response:res.data.result
                    });
                }
            }
            catch(err){
                console.error(err);
            }
        }
    }
}
</script>
<style scoped>
.shell {
    display:flex;
    flex-direction:column-reverse;
    width:700px;
    height:500px;
    overflow-y:scroll;
}
</style>
<template>
    <div class="ssh-client">
        <div class="shell dracular" ref="command-output"> 
            <CommandLine :class="{dracular:true}" v-for="(log,index) in ShellLogs" :key="index" :log="log"/>
            <div class="shell-input" v-for="index in lineIndexs" :key="index">
                <span class="prompt">{{index===0? '$':'>'}}</span>
                <input 
                    id="input-field"
                    type="text" 
                    :ref="`command-input-${index}`" 
                    v-model="commands[index]"
                    spellcheck="false"
                    :disabled="index!==(lineIndexs.length-1)?true:false"
                    autocomplete="off"
                    @keyup.enter="execCommand"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState,mapActions,mapMutations } from 'vuex'
import CommandLine from '@/components/widget/CommandLine.vue'
export default {
    name: 'ShellClient',
    data() {
        return {
            commands: [""],
            logs:[],
            lineIndexs: [0]
        }
    },
    components: {
        CommandLine
    },
    computed: {
        ...mapState([
            "ShellLogs"
        ]),
    },
    updated() {
        this.$refs['command-output'].scrollTop = this.$refs['command-output'].scrollHeight;
        this.$refs[`command-input-${this.lineIndexs[this.lineIndexs.length-1]}`].focus();
    },
    methods: {
        ...mapMutations(['pushShellLogs','clearShellLogs']),
        ...mapActions(['requestExecCommand']),
        async execCommand(e) {
            if(e.key === "Enter") {
                let lastCommand = this.commands[this.commands.length-1];
                if(lastCommand[lastCommand.length-1] == '\\'){
                    this.commands.push("");
                    this.lineIndexs.push(this.lineIndexs.length);
                    return;
                }
                try {
                    const command = this.commands.join('\r\n');
                    const res = await this.requestExecCommand({command});
                    if(res.status==200){
                        this.pushShellLogs({
                            time: res.headers.date,
                            command,
                            stdout:res.data.stdout,
                            stderr:res.data.stderr
                        });
                    }
                    //clear를 어떻게 해결할 것인가
                }
                catch(err){
                    console.error(err);
                }
                finally {
                    this.commands = [""];
                    this.lineIndexs = [0];
                }
            }
        },
        onInputCommand(e) {
            this.command = e.target.value;
        },
        clear() {
            this.clearShellLogs();
        }
    }
}
</script>
<style lang="scss" scoped>
@font-face {
    font-family: 'NanumGothic';
    src: url('/assets/fonts/Nanum_Gothic_Coding/NanumGothicCoding-Bold.ttf') format('truetype');
}
.ssh-client {
    width:100%;
    display:flex;
    justify-content: center;
    font-family: NanumGothic;
}
*::selection {
    color:#121212;
    background: var(--primmary-color);
}
.dracular {
    --background-color: #282a36;
    --foreground-color:  #f8f8f2;
    --primmary-color: #50fa7b;
}
.shell {
    display:flex;
    flex-direction:column;
    height:630px;
    width:680px;
    padding:10px 10px 20px 10px;
    border-radius: 8px;
    background-color: var(--background-color);
    overflow-y:scroll;
    //font-family: monospace;
    font-size:1.05rem;
    .shell-input {
        display:flex;
        flex-direction:row;
        justify-content: flex-start;
        background-color: var(--background-color);
        color: var(--foreground-color);
        border-radius: 8px;
        .prompt {
            font-size:1.02rem;
            margin-right:8px;
            color: var(--primmary-color);
        }
        input {
            font-size:1.02rem;
            resize: none;
            color: var(--foreground-color);
            background-color: var(--background-color);
            border:none;
            padding:0;
            width:695px;
            font-family: inherit;
            caret-color: var(--foreground-color);
            &:focus {
                outline:none;
            }
        }
        button {
            visibility:hidden;
        }
    }
}
</style>
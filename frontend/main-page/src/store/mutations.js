export default {
    mutationTest(state) {
        console.log('mutation Test function');
    },
    login(state, payload) {
        console.log(payload.id,payload.password);
    },
    unshiftShellLogs(state,payload) {
        //log length가 일정 이상보다 커지면 하나씩 pop하도록 수정
        state['ShellLogs'].unshift(payload);
    },
    shiftShellLogs(state) {
        state['ShellLogs'].shift();
    },
    pushShellLogs(state,payload) {
        //log length가 일정 이상보다 커지면 하나씩 pop하도록 수정
        state['ShellLogs'].push(payload);
    },
    popShellLogs(state,payload) {
        state['ShellLogs'].pop();
    },
    clearShellLogs(state) {
        state['ShellLogs'] = [];
    },
    unshiftCommandCache(state,payload) {
        state['commandCache'].unshift(payload);
    },
    pushCommandCache(state,payload) {
        state['commandCache'].push(payload);
    }
}
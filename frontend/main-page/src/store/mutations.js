export default {
    mutationTest(state) {
        console.log('mutation Test function');
    },
    login(state, payload) {
        console.log(payload.id,payload.password);
    },
    unshiftSSHlogs(state,payload) {
        //log length가 일정 이상보다 커지면 하나씩 pop하도록 수정
        state['SSHlogs'].unshift(payload);
    },
    shiftSSHlogs(state) {
        state['SSHlogs'].shift();
    }
}
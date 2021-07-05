export default {
    mutationTest(state) {
        console.log('mutation Test function');
    },
    login(state, payload) {
        console.log(payload.id,payload.password);
    },
}
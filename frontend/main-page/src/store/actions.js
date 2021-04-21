import axios from 'axios'
export default {
    actionTest(state) {
        console.log('action Test function');
    },
    async requestLogin({state,commit}, payload) {
        const data = {
            id:payload.id,
            password:payload.password
        }
        const response = await axios.post('/login', data);
    },
    async requestSignup({state}, payload) {
        const data = {
            name:payload.name,
            id:payload.id,
            password:payload.password,
            email:payload.email
        }
        const response = await axios.post('/signup', data);
    }
}

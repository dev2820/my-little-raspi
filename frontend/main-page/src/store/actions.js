import axios from 'axios'
import myCookie from '@/my_modules/myCookie'

export default {
    actionTest(state) {
        console.log('action Test function');
    },
    async requestLogin({state,commit}, payload) {
        const data = {
            id:payload.id,
            password:payload.password
        }
        return await axios.post('/users/login', data);
    },
    async requestSignup({state}, payload) {
        const data = {
            id:payload.id,
            name:payload.name,
            password:payload.password,
            email:payload.email
        }
        return await axios.post('/users/signup', data);
    },
    async requestUniqueIdCheck({state},payload) {
        const data = {
            id:payload
        }
        return await axios.get('/users/is-uniqueid', data);
    },
    async requestUserInfo({state}) {
        return await axios.get('/users/get-user-info');
    },
    async requestModifyUserInfo({state},payload) {
        const data = {
            name:payload.name,
            email:payload.email
        }
        return await axios.patch('/users/modify-user-info',data);
    },
    async requestModifyPassword({state},payload) {
        const data = {
            oldPassword: payload.oldPassword,
            newPassword: payload.newPassword,
        }
        return await axios.patch('/users/modify-password',data);
    },
    async requestSignout({state},payload) {
        const data = {
            password: payload.password,
        }
        return await axios.delete('/users/signout',{ data });
    }
}

import myCookie from '@/my_modules/myCookie'
import axios from 'axios'
import state from './state'
axios.defaults.withCredentials = true;
axios.interceptors.response.use(
    (response)=>response,
    async (error)=> {
        const errorAPI = error.response.config;
        if(error.response.status === 401) {
            errorAPI.retry = true;
            await requestRefreshToken({state});
            return await axios(errorAPI);
        }
        return error;
    }
)

async function requestLogin({state,commit}, payload) {
    const data = {
        id:payload.id,
        password:payload.password
    }
    const response = await axios.post('/users/login', data);
    if(response.data) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
        state['accessToken'] = response.data.accessToken;
        return response;
    }
    else {
        return Promise.reject(response)
    }
    
}

async function requestRefreshToken({state}) {
    const response = await axios.get('/users/refresh-token')
    if(response.data) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
        state['accessToken'] = response.data.accessToken;
        return response;
    }
    else {
        return Promise.reject(response)
    }
}

async function requestSignup({state}, payload) {
    const data = {
        id:payload.id,
        name:payload.name,
        password:payload.password,
        email:payload.email
    }
    return await axios.post('/users/signup', data);
}

async function requestLogout({state}) {
    const response = await axios.get('/users/logout');
    if(response.data) {
        state['accessToken'] = "";
        return response;
    }
    else {
        return Promise.reject(response);
    }
}

async function requestUniqueIdCheck({state},payload) {
    const data = {
        id:payload
    }
    return await axios.post('/users/is-uniqueid', data);
}

async function requestUserInfo({state}) {
    return await axios.get('/users/get-user-info');
}

async function requestModifyUserInfo({state},payload) {
    const data = {
        name:payload.name,
        email:payload.email
    }
    return await axios.patch('/users/modify-user-info',data);
}

async function requestModifyPassword({state},payload) {
    const data = {
        oldPassword: payload.oldPassword,
        newPassword: payload.newPassword,
    }
    return await axios.patch('/users/modify-password',data);
}

async function requestSignout({state},payload) {
    const data = {
        password: payload.password,
    }
    return await axios.delete('/users/signout',{ data });
}
/*ssh 통신용 actions */
async function requestExecCommand({state},payload) {
    const data = {
        command: payload.command,
    }
    return await axios.post('/shell/command',data);
}
export default {
    requestLogin,
    requestRefreshToken,
    requestSignup,
    requestLogout,
    requestUniqueIdCheck,
    requestUserInfo,
    requestModifyUserInfo,
    requestModifyPassword,
    requestSignout,
    requestExecCommand
}

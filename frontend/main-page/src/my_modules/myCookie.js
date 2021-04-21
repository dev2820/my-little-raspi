export default {
    setCookie(name,value,time) {
        const date = new Date();
        date.setTime(date.getTime() + time);
        document.cookie = `${name}=${value};expires=${date.toUTCString()};path='/'`;
    },
    getCookie(name,value,time) {
        var value = document.cookie.match(`(^|;)?${name}=([^;]*)(;|$)`);
        return value? value[2] : null;
    },
    deleteCookie(name) {
        const date = new Date();
        document.cookie = `${name}='';expires=${date.toUTCString()};path=/`;
    }
}
const login = require('./login'); 
const signup = require('./signup'); 
const signout = require('./signout'); 
const modifyuserinfo = require('./modifyuserinfo'); 
const modifypassword = require('./modifypassword.js'); 
const isuniqueid = require('./isuniqueid'); 
const getuserinfo = require('./getuserinfo');

module.exports = {
    login,
    signup,
    signout,
    modifyuserinfo,
    modifypassword,
    isuniqueid,
    getuserinfo,
}

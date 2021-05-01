const login = require('./login'); 
const signup = require('./signup'); 
const signout = require('./signout'); 
const modify = require('./modify'); 
const isuniqueid = require('./isuniqueid'); 
const getuserinfo = require('./getuserinfo'); 
const passwordcheck = require('./passwordcheck'); 

module.exports = {
    login,
    signup,
    signout,
    modify,
    isuniqueid,
    getuserinfo,
    passwordcheck
}

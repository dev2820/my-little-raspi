const login = require('./login'); 
const signup = require('./signup'); 
const signout = require('./signout'); 
const modifyUserInfo = require('./modifyUserInfo'); 
const modifyPassword = require('./modifyPassword.js'); 
const isUniqueId = require('./isUniqueId'); 
const getUserInfo = require('./getUserInfo');

module.exports = {
    login,
    signup,
    signout,
    modifyUserInfo,
    modifyPassword,
    isUniqueId,
    getUserInfo,
}

const login = require('./login'); 
const signup = require('./signup'); 
const logout = require('./logout');
const signout = require('./signout'); 
const modifyUserInfo = require('./modifyUserInfo'); 
const modifyPassword = require('./modifyPassword.js'); 
const isUniqueId = require('./isUniqueId'); 
const getUserInfo = require('./getUserInfo');
const refreshToken = require('./refreshToken')
module.exports = {
    login,
    signup,
    logout,
    signout,
    modifyUserInfo,
    modifyPassword,
    isUniqueId,
    getUserInfo,
    refreshToken
}

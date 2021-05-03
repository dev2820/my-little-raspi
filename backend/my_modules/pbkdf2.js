'use strict';

const crypto = require('crypto');
const util = require('util');

const pbkdf2Hasing = async (password,salt) => {
	const asyncPbkdfs = util.promisify(crypto.pbkdf2);
    const key = await asyncPbkdfs(password,salt,100000,64,'sha512');
	return key.toString('base64');
}
const genSalt = async (password,salt) => {
	return await crypto.randomBytes(64).toString('base64')
}
const compare = async (plainPassword,password,salt) => {
	const hashedPassword = await pbkdf2Hasing(plainPassword,salt);
	return password === hashedPassword;
}
module.exports = {
	pbkdf2Hasing,
	genSalt,
	compare
};
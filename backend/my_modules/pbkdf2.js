'use strict';

const crypto = require('crypto');
const util = require('util');
module.exports = {};
module.exports.pbkdf2Hasing = async (password,salt) => {
	const asyncPbkdfs = util.promisify(crypto.pbkdf2);
    const key = await asyncPbkdfs(password,salt,100000,64,'sha512');
	return key.toString('base64');
}

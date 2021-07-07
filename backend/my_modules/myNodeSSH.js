'use strict';

const { NodeSSH } = require('node-ssh');

function connection() {
    return new NodeSSH().connect({
        host:process.env.PI_IP,
        username: process.env.PI_USERNAME,
        port:22,
        password: process.env.PI_PASSWORD,
        readyTimeout: 60*10
    });
}
module.exports = {
    connection
}
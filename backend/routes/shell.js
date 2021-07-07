const express = require('express');
const router = express.Router();
const nodeSSH = require('../my_modules/myNodeSSH');

router.post('/command',async (req,res)=>{
    try {
        const command = req.body.command;
        const ssh = await nodeSSH.connection();
        const result = await ssh.execCommand(command);
        res.status(200).json({
            data: result.stdout
        })
    }
    catch(err) {
        console.log(err);
        res.status(400).json({
            data: null
        })
    }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const { exec } = require('child_process');
const { verifyToken } = require('../my_middleware/authorization')

router.post('/command',verifyToken, async (req,res)=>{
    try {
        console.log(req.body)
        const execResult = await exec(req.body.command);
        console.log(execResult);
        res.status(200).json({
            stdout: execResult.stdout,
            stderr: execResult.stderr,
        })
    }
    catch(err) {
        console.log(err);
        res.status(400).json({ message:"exec failed", data: "" })
    }
});

module.exports = router;
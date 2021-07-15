const express = require('express');
const router = express.Router();
const { exec } = require('child_process');
const { verifyToken } = require('../my_middleware/authorization')
let cwd = "~"
router.post('/command',verifyToken, async (req,res)=>{
    try {
        const { stdout, stderr } = await exec(req.body.command,{ cwd: "~" });
        res.status(200).json({
            stdout,
            stderr,
        })
    }
    catch(err) {
        console.log(err);
        res.status(400).json({ message:"exec failed", data: "" })
    }
});

module.exports = router;
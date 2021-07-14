const jwt = require('jsonwebtoken');

module.exports = async function(req, res) {
    const decodedRefreshToken = req.cookies['refreshToken'] && jwt.verify(refreshToken,JWTKEY);
    try {
        const accessToken = jwt.sign({
            userID: decodedRefreshToken.userID,
            loginTime: decodedRefreshToken.loginTime
        }, JWTKEY, {
            expiresIn: '1h'
        });
        res.status(200).json({ accessToken, expire: 60*60 })
    }
    catch(err) {
        res.status(400).json({ message: 'refresh token failed'})
    }
}

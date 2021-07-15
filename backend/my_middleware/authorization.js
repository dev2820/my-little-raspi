const jwt = require('jsonwebtoken');
const JWTKEY = process.env.JWTSECRET;
const accessTokenExpiresIn = "1h"

const verifyToken = (req, res, next) => {
    try {
        const decodedAccessToken = req.headers.authorization && jwt.verify(req.headers.authorization.split('Bearer ')[1],JWTKEY, { expiresIn: accessTokenExpiresIn});
        const decodedRefreshToken = req.cookies['refreshToken'] && jwt.verify(req.cookies['refreshToken'],JWTKEY);
        
        if(!!decodedRefreshToken) { // refreshToken이 존재하는 경우
            if(!!decodedAccessToken) { // accessToken이 존재하는 경우
                res.locals.userID = decodedAccessToken.userID;
                next();
            }
            else { // accessToken이 만료된  경우 -> 재발급요청
                res.status(401).json({message: 'accessToken is expired'})
            }
        }
        else {
            throw err;
        }
    }
    catch (err) {
        if(req.cookies['refreshToken']) res.clearCookie('refreshToken');
        res.status(401).json({ message: 'unauthorized'});
    }
}

module.exports = {
    verifyToken
}

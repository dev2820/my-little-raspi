const jwt = require('jsonwebtoken');
const JWTKEY = process.env.JWTSECRET;

const verifyToken = (req, res, next) => {
    try {
        const clientToken = req.cookies.user;
        const decoded = jwt.verify(clientToken, JWTKEY);

        if(decoded) {
            res.locals.userID = decoded.userID;
            next();
        }
        else {
            res.status(401).json({ message: 'unauthorized'});
        }
    }
    catch (error) {
        res.status(419).json({ message: 'token expired'});
    }
}

exports.verifyToken = verifyToken;

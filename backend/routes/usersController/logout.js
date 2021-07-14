module.exports = async function(req, res) {
    try {
        res.clearCookie('refreshToken');
        res.status(200).json({ message: 'logout success'})
    }
    catch(err) {
        res.status(400).json({ message: 'logout failed'})
    }
}

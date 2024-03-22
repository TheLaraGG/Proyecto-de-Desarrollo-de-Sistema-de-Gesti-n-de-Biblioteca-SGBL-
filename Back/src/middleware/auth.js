const jwt = require('jsonwebtoken');
const auth= (req, res, next) => {
    const token = req.header('token');
    if (!token) return res.status(401).send('Access Denied');
    jwt.verify(token, 'secretkey', (err, decoded) => {
        if (err) return res.status(401).send('Access Denied');
        req.user = decoded;
        next();
    })
}
module.exports=auth;
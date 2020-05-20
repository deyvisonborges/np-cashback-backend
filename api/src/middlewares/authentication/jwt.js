const jwt = require('jsonwebtoken');
const secret_key = require('../../config/keys/security');

exports.authorize = async (req, res, next) => {
    try {
        // const _header = req.headers.authorization;  
        // console.log(_header)
        // if(!_header) return res.send('Acesso restrito');
        // next();
        // ainda nao implementei por completo ;)
    } catch (err) {
        next(err);
    }
}

exports.generateToken = async (data) => {
    return await jwt.sign(data, secret_key.auth.secret);
}

exports.decoded = async (token) => {
    const data = await jwt.decode(token, Security.AuthJson.secret);
    return data;
}
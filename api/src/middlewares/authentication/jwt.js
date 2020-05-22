const jwt = require('jsonwebtoken');

const authorize = (SECRET_AUTH) => (req, res, next) => {
  try {
    if (!SECRET_AUTH) {
      throw new Error('[DEV_ERROR] Você precisa injetar uma config_auth para poder autorizar a requisição!');
    } else {
      const header_token = req.headers['authorization'] || req.headers['authorization'] || window.localStorage.getItem('token');
      if (!header_token)
        throw new Error('Token not found');
      return next();  
    }
  } catch (err) {
    next(req.body.err_message = err.message);
  }
}

const generate = (payload, SECRET_AUTH) => err => {
  if(err) {
    throw new Error('Não foi possível gerar o token.');
  } else {
    const data = jwt.sign(payload, SECRET_AUTH);
    return data;
  }
}

const decode = (payload, SECRET_AUTH) => err => {
  if (err) {
    throw new Error('Não foi decodificar o token.');
  }
  const data = jwt.decode(payload, SECRET_AUTH);
  return data
}

module.exports = {
  authorize, generate, decode
}

const jwt = require('jsonwebtoken');

const authorize = (SECRET_AUTH) => (req, res, next) => {
  try {
    if (!SECRET_AUTH) {
      throw new Error('[DEV_ERROR] You need to inject a configuration to authorize a request!');
    } else {
      const header_token = req.headers['authorization'] || req.headers['authorization'];
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
    throw new Error('The token could not be generated.');
  } else {
    const data = jwt.sign(payload, SECRET_AUTH);
    return data;
  }
}

const decode = (payload, SECRET_AUTH) => err => {
  if (err) {
    throw new Error('The token could not be decoded.');
  }
  const data = jwt.decode(payload, SECRET_AUTH);
  return data;
}

module.exports = {
  authorize, generate, decode
}

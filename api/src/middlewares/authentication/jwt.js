const lc = require('localtoken');

const authorize = (SECRET_AUTH) => (req, res, next) => {
  try {
    if (!SECRET_AUTH) {
      throw new Error('[DEV_ERROR] You need to inject a configuration to authorize a request!');
    } else {
      const header_token = req.headers['authorization'] || req.headers['authorization'] || lc.getInLocal('token');
      if (!header_token)
        throw new Error('Token not found');
      return next();  
    }
  } catch (err) {
    next(err.message);
  }
}

module.exports = {
  authorize
}

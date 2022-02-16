const crypto = require('crypto');

module.exports = (_req, res, next) => {
  try {
    // https://www.geeksforgeeks.org/node-js-crypto-randombytes-method/ metodo usado para criar o token
    const buf = crypto.randomBytes(8).toString('hex');
    
    const token = { token: buf };

    return res.status(200).json(token);
  } catch (error) {
    return next(error);
  }
};

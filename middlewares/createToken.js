const crypto = require('crypto');

module.exports = (_req, res, next) => {
  try {
    const buf = crypto.randomBytes(8).toString('hex');
    
    const token = { token: buf };

    return res.status(200).json(token);
  } catch (error) {
    return next(error);
  }
};

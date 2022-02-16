const errorHandler = require('./errorHandler');
const validateEmail = require('./validadeEmail');
const validatePassword = require('./validatePassword');
const createToken = require('./createToken');

module.exports = {
  errorHandler,
  validateEmail,
  validatePassword,
  createToken,
};

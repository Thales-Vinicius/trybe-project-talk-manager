module.exports = (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    // https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript de onde eu tirei pela 1 vez esse regex e venho usando desde front-end
    if (!email.match(/\S+@\S+\.\S+/)) {
      return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }

    return next();
  } catch (error) {
    return next(error);
  }
};

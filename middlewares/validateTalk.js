module.exports = (req, res, next) => {
  try {
    const { talk } = req.body;
    if (!talk) {
      return res.status(400).json({ 
        message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
      });
    }
    const { watchedAt, rate } = talk;
    if (!watchedAt || rate === undefined) {
      return res.status(400).json({ 
        message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
      });
    }
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = (req, res, next) => {
  try {
    const { talk } = req.body;
    const { watchedAt, rate } = talk;
  
    if (!watchedAt.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/)) {
      return res.status(400).json({
        message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
      });
    }

    if (rate < 1 || rate > 5) {
      return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }

    return next();
  } catch (error) {
    return next(error);
  }
};

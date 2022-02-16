const { readFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const talkers = await readFile('./talker.json', 'utf-8');
    const parsedtalkers = JSON.parse(talkers);

    const talker = parsedtalkers.find((talkerId) => talkerId.id === Number(id));

    if (!talker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

    return res.status(200).json(talker);
  } catch (error) {
    return next(error);
  }
};

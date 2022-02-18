const { readFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { queryName } = req.query;

    const talkers = await readFile('./talker.json', 'utf-8');
    const parsedTalkers = JSON.parse(talkers);

    if (!queryName) return res.status(200).json(parsedTalkers);

    const filterTalkers = parsedTalkers.filter((talker) => talker.name.includes(queryName));

    return res.status(200).json(filterTalkers);
  } catch (error) {
    return next(error);
  }
};
const { readFile, writeFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const talkers = await readFile('./talker.json', 'utf-8');
    const parsedTalkers = JSON.parse(talkers);

    const filterTalkers = parsedTalkers.filter((talker) => talker.id !== Number(id));

    const stringifyTalkers = JSON.stringify(filterTalkers, null, 2);
    await writeFile('./talker.json', stringifyTalkers);
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
};

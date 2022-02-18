const { readFile, writeFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, age, talk } = req.body;
    const { watchedAt, rate } = talk;

    const talkers = await readFile('./talker.json', 'utf-8');
    const parsedTalkers = JSON.parse(talkers);
    const talkIndex = parsedTalkers.findIndex((talker) => talker.id === Number(id));
    const updateTalker = { id, name, age, talk: { watchedAt, rate } };
    parsedTalkers[talkIndex] = updateTalker;

    const stringifyTalkers = JSON.stringify(parsedTalkers, null, 2);
    await writeFile('./talker.json', stringifyTalkers);
    
    return res.status(200).json(updateTalker);
  } catch (error) {
    return next(error);
  }
};

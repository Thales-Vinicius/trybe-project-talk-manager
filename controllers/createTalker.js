const { readFile, writeFile } = require('fs/promises');

module.exports = async (req, res, next) => {
  try {
    const { name, age, talk } = req.body;
    const { watchedAt, rate } = talk;
    const talkers = await readFile('./talker.json', 'utf-8');
    const parsedTalkers = JSON.parse(talkers);
    const newTalker = {
      id: parsedTalkers.length + 1,
      name,
      age,
      talk: { watchedAt, rate },
    };
    parsedTalkers.push(newTalker);
    const stringifyTalkers = JSON.stringify(parsedTalkers);
    await writeFile('./talker.json', stringifyTalkers);
    return res.status(201).send(newTalker);
  } catch (error) {
    return next(error);
  }
};

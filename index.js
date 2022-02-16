const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const loginMiddlewares = [
  middlewares.validateEmail,
  middlewares.createToken,
  middlewares.validatePassword,
];

app.post(
  '/login',
  loginMiddlewares,
);

app.get(
  '/talker',
  controllers.showTalkers,
);

app.get(
  '/talker/:id',
  controllers.getTalkerByid,
);

app.use(middlewares.errorHandler);

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

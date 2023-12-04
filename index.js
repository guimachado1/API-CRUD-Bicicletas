const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/bicicletas'); 
const sequelize = require('./database'); 

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server rodando na porta ${port}`);
});

module.exports = sequelize;
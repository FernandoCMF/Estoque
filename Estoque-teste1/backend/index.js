require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
import connectToDB from './db.js';
const app = express();



app.use(bodyParser.json()); //Configura o Express para usar o body-parser para interpretar JSON


//Conexao com mongoDB
connectToDB()


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

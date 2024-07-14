const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.json()); //Configura o Express para usar o body-parser para interpretar JSON


//Define o caminho absoluto para o arquivo db.json, que está localizado no mesmo diretório que o arquivo de código 
const dbPath = path.join(__dirname, 'db.json');



// readDb e writeDb: Funções auxiliares para ler e escrever o arquivo db.json
const readDb = () => {
  const data = fs.readFileSync(dbPath);
  return JSON.parse(data);
};

const writeDb = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};


app.get('/api/:collection', (req, res) => {
  const db = readDb();
  const collection = req.params.collection;
  res.send(db[collection]);
});

app.get('/api/:collection/:id', (req, res) => {
  const db = readDb();
  const collection = req.params.collection;
  const id = req.params.id;
  const item = db[collection].find((el) => el[`id_${collection.slice(0, -1)}`] === id);
  res.send(item);
});

app.post('/api/:collection', (req, res) => {
  const db = readDb();
  const collection = req.params.collection;
  const newItem = req.body;
  db[collection].push(newItem);
  writeDb(db);
  res.send(newItem);
});

app.put('/api/:collection/:id', (req, res) => {
  const db = readDb();
  const collection = req.params.collection;
  const id = req.params.id;
  const updatedItem = req.body;
  const index = db[collection].findIndex((el) => el[`id_${collection.slice(0, -1)}`] === id);
  db[collection][index] = updatedItem;
  writeDb(db);
  res.send(updatedItem);
});

app.delete('/api/:collection/:id', (req, res) => {
  const db = readDb();
  const collection = req.params.collection;
  const id = req.params.id;
  const index = db[collection].findIndex((el) => el[`id_${collection.slice(0, -1)}`] === id);
  const deletedItem = db[collection].splice(index, 1);
  writeDb(db);
  res.send(deletedItem);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

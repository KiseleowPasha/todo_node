const express = require('express');
const path = require('path');
const fs = require('fs');
const PORT = 8080;

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const DIST_DIR = path.join(__dirname, '../dist');
const DB_DIR = path.join(__dirname, './db');
const DB_FILE = path.join(DB_DIR, 'todos.json');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const urlencodedParser = express.urlencoded({ extended: false });

app.use(express.static(DIST_DIR));

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.get('/get_data_base', (req, res) => {
  res.sendFile(DB_FILE);
});

app.post('/post_data_base', urlencodedParser, (req, res) => {
  const todoString = JSON.stringify(req.body, null, '\n');
  fs.writeFile(DB_FILE, todoString, (err) => {
    if (err) throw error;
  });
  res.send(req.statusCode);
});

app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});

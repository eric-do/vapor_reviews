const express = require('express');
const parser = require('body-parser');
const db = require('../db');
const app = express();
const port = 3005;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

app.get('/test', (req, res) => {
  console.log('Working');
});

app.get('/reviews', (req, res) => {
  db.getReviews((err, data) => {
    if (err) { return console.error(err); }
    res.send(data);
  });
});
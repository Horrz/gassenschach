'use strict'
const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// controller
app.get('/', (req, res) => {
  res.render('index');
});


app.listen(8080, (err) => {
  if (!err) {
    console.log('app started');
  }
})
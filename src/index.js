'use strict'
const express = require('express');
const hbs = require('hbs');
const path = require('path');

const articleListController = require('./controller/articleList');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs') ;
app.set('view options', { layout: 'layouts/default' });
app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(__dirname + '/views/partials');

// routing
app.get('/articleList', articleListController);

app.listen(8080, (err) => {
  if (!err) {
    console.log('app started');
  }
})
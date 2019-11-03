//TODO: load articles dynamic. ATM only dummy data is pressent.
const articles = require('../../demo-data/articles');

function articleListController(req, res) {
  res.render('index', {articles});
}

module.exports = articleListController;

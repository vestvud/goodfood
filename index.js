var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('pages/index');
});
app.get('/search', function(req, res) {
  res.render('pages/index');
});
app.get('/recipes/', function(req, res) {
  res.render('pages/index');
});
app.get('/recipes/:recipeId', function(req, res) {
  res.render('pages/index');
});
app.get('/recipes/favorite', function(req, res) {
  res.render('pages/index');
});

app.post('/addRecipe', function(req, res) {
  var data = req.body.data;
});

app.get('/findRecipes/test', function(req, res) {
  res.send(JSON.stringify([{title: 'recipe1', text: 'testtestets', type: {title: 'main'}}, {title: 'recipe2', text: '2testtestets', type: {title: 'main2'}}]))
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



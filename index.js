var express = require('express');
var app = express();
var pg = require('pg');
require('es6-shim');
var connectionString;

if (process.env.NODE_ENV === 'dev') {
  connectionString = require('./config.js')();
} else {
  connectionString = process.env.DATABASE_URL;
}

pg.defaults.ssl = process.env.NODE_ENV == 'dev' ? false : true;

pg.connect(connectionString, (err, client) => {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  initApp(client);
});

initApp = (client) => {
  app.set('port', (process.env.PORT || 5000));

  var session = require('express-session');
  var bodyParser = require('body-parser');

  app.use(session({
    secret: 'good!',
    cookie: {
      maxAge: 60000
    }
  }));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));

  app.use(express.static(__dirname + '/public'));

  // views is directory for all template files
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');

  //routing
  app.get('/', (req, res) => {
    res.render('pages/index');
  });

  app.get('/search', (req, res) => {
    res.render('pages/index');
  });

  app.get('/recipes', (req, res) => {
    res.render('pages/index');
  });

  app.get('/recipes/:recipeId', (req, res) => {
    res.render('pages/index');
  });

  app.get('/getRecipes', (req, res) => {
    client
      .query('SELECT * FROM "recipes"', (err, result) => {
        if (err) {
          throw err;
        }
        if (result.rows.length === 0) {
          res.send('Not found', 404);
          return;
        }
        res.send(JSON.stringify(result.rows));
      });
  });

  app.get('/getRecipe/:recipeId', (req, res) => {
    client
      .query('SELECT * FROM "recipes" WHERE id=$1', [req.params.recipeId], (err, result) => {
        if (err) {
          throw err;
        }
        if (result.rows.length === 0) {
          res.send('Not found', 404);
          return;
        }
        res.send(JSON.stringify(result.rows));
      });
  });

  app.get('/findRecipes/:query', (req, res) => {
    var query = req.params.query || '';
    client
      .query('SELECT * FROM "recipes" WHERE "title" ILIKE $1 OR "text" ILIKE $1', 
        ['%' + query + '%'], (err, result) => {
        if (err) {
          throw err;
        }
        res.send(JSON.stringify(result.rows));
      });
  })

  app.get('/findRecipes/', (req, res) => {
    client
      .query('SELECT * FROM "recipes"', (err, result) => {
        if (err) {
          throw err;
        }
        if (result.rows.length === 0) {
          res.send('Not found', 404);
          return;
        }
        res.send(JSON.stringify(result.rows));
      });
  });

  app.post('/addRecipe', (req, res) => {
    var data = req.body;
    var title = data.title || 'TEST',
      text = data.text || 'TEST',
      proteins = data.proteins || 0,
      carbohydrates = data.carbohydrates || 0,
      fats = data.fats || 0,
      calorific = data.calorific || 0;

    client
      .query('INSERT INTO recipes (title, text, proteins, carbohydrates, fats, calorific) values($1, $2, $3, $4, $5, $6) RETURNING id', 
        [title, text, proteins, carbohydrates, fats, calorific],
        (err, result) => {
          if (err) {
            throw err;
          }
          res.send(JSON.stringify({success: true, id: result.rows[0].id}));
        });
  });

  app.post('/deleteRecipe', (req, res) => {
    var recipeId = req.body.recipeId;

    console.log(recipeId, 'recipeId')

    client
      .query('DELETE FROM recipes WHERE id=$1',
        [recipeId],
        (err, result) => {
          if (err) {
            throw err;
          }
          res.send(JSON.stringify({success: true}));
        });
  })

  //listen
  app.listen(app.get('port'), () => {
    console.log('Node app is running on port', app.get('port'));
  });
}

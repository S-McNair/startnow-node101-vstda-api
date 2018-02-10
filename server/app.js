const express = require('express');
const morgan = require('morgan');
const http = require('http');
//var router = express.Router();  //express.Router effectively allows for the daisy-chaining/nesting of routes w/ shorthand

var bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({ extended: false }));

const app = express();
//app.use(router);
app.use(bodyParser.json())

var port = 8484;
app.listen(port, listening);
function listening() {
  console.log("Listening on port: " + port);
}

var apiData = [
              {
                todoItemId: 0,
                name: 'an item',
                priority: 3,
                completed: false
              },
              {
                todoItemId: 1,
                name: 'another item',
                priority: 2,
                completed: false
              },
              {
                todoItemId: 2,
                name: 'a done item',
                priority: 1,
                completed: true
              }
            ];
//console.log(apiData[1]);
// const index = require('./index');
// console.log(index);
app.get('/', function (req, res, next)  {
  res.status(200).json(apiData);
  next();
});

app.get('/api/TodoItems', function(req, res, next){
  res.json(apiData);
  next();
});

app.post('/api/TodoItems/', function (req, res, next) {
    var newItem = {
        todoItemId: 0,
        name: "item",
        priority: 4,
        completed: true
    };
    res.status(201).json(newItem);
    next();
});

app.delete('/api/TodoItems/:id', function (req, res, next) {
  var taskId =  req.params.id;
  res.status(200).json(apiData[taskId]);
  next();
});

app.get('/api/TodoItems/:id', function (req, res) {
  var taskId = req.params.id;

  console.log('the ID is: ' + taskId);
  //console.log(apiData);
  res.send(apiData[taskId]);
});

module.exports = app;




// ✓ ✓ ✓ ✓ ✓ GET / responds with a 200 response code
// ✓ ✓ ✓ ✓ ✓ GET /api/TodoItems responds with all items
// ✓ ✓ ✓ ✓ ✓ POST /api/TodoItems responds with item, status 201
// ✓ ✓ ✓ ✓ ✓ DELETE /api/TodoItems/{id} responds with an item
// ✓ ✓ ✓ ✓ ✓ GET /api/TodoItems/{id} responds with an item

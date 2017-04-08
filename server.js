var express = require('express');
var bodyParser = require('body-parser');
var routeController = require('./controllers/route-controller');
var ejs = require('ejs');

var app = express();

app.set('view engine' , 'ejs');
app.use(express.static('./public'));
routeController(app);

app.listen(3000);
console.log("We are listening to port 3000 ");

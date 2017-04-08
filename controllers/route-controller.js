var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var mongoose = require('mongoose');

var urlEncodedParser = bodyParser.urlencoded({extended : false});

datas = [
  {
    task :"Ekmek al."
  },
  {
    task : "Süt al."
  },
  {
    task : "Köpeği yürüyüşe çıkart."
  }
];
module.exports = function(app){

  app.get('/' , function(req , res){
    res.render('index' , {data : datas});
  });

  app.get('/hello' , function(req , res){
    res.send("hello world");
  });

  app.get('/about' , function(req , res){
    res.render('about', {name : ""});
  });

  app.get('/about/:name' , function(req , res){
    res.render('about' , {name : req.params.name } );
  });

}

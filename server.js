'use strict';
var express = require('express');
var app = express();
app.use(express.bodyParser());
app.all('*', function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-xsrf-token");
  next();
});
app.get('/', function(req, res) {
  res.jsonp('please navigate to /animals')
});    
var data = [{dog:'butler'}, {cat:'mabibi'}];
app.get('/animals', function(req, res){
  res.jsonp(data); 
});
app.post('/animals', function(req, res){
  console.log(req.body);
  data.push(req.body);
  res.jsonp(data);
});
app.listen(3030);
console.log('listening on 3030')

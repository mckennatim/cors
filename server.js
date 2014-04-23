'use strict';
var express = require('express');
var _ = require('underscore')
var app = express();

app.use(express.bodyParser());
app.all('*', function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-xsrf-token");
  next();
});
app.get('/', function(req, res) {
  res.jsonp('please navigate to /animals')
});    
var data = [{type:'dog', name:'butler'}, {type:'cat', name:'mabibi'}];
app.get('/animals', function(req, res){
  res.jsonp(data); 
});
app.post('/animals', function(req, res){
  console.log(req.body);
  data.push(req.body);
  res.jsonp(data);
});
app.put('/animals/:type', function(req, res){
  console.log('in put');
  console.log(req.params.type);
  console.log(req.body);
  var idx =data.indexOf(_.where(data, {type:req.params.type})[0]);
  data[idx].name=req.body.name
  console.log(idx)
  res.jsonp(data[idx]);
});
app.del('/animals/:type', function(req, res){
  console.log('in del');
  console.log(req.params.type);
  console.log(req.body);
  var idx =data.indexOf(_.where(data, {type:req.params.type})[0]);
  data.splice([idx],1)
  console.log(idx)
  res.jsonp(req.body);
});
app.listen(3030);
console.log('listening on 3030')


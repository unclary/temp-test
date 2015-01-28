/*
 * 模块依赖
 */
var express = require('express')
	, path = require('path');
var app = express();
var url = require('url');
var fs = require('fs');
/*
 * 坏境变量
 */
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');


app.get("/test/", function(req, res){
	res.send("test");
})

app.get("*", function(req, res){
	res.send("ok");
})

app.listen( app.get('port'), function(){
	console.log('listen to ' + app.get('port'));
} );
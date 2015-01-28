/*
 * 模块依赖
 */
var express = require('express')
	, path = require('path')
	, hbs = require("hbs");
var app = express();
var url = require('url');
var fs = require('fs');
/*
 * 坏境变量
 */
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'html');
app.engine("html", hbs.__express);

hbs.registerPartial("head_start", fs.readFileSync(__dirname+"/views/block/head_start.html", "utf-8"));
hbs.registerPartial("head_end", fs.readFileSync(__dirname+"/views/block/head_end.html", "utf-8"));
hbs.registerPartial("body_header", fs.readFileSync(__dirname+"/views/block/body_header.html", "utf-8"));
hbs.registerPartial("body_banner", fs.readFileSync(__dirname+"/views/block/body_banner.html", "utf-8"));
hbs.registerPartial("body_footer", fs.readFileSync(__dirname+"/views/block/body_footer.html", "utf-8"));
hbs.registerPartials(__dirname+"/views/blockdirs");

app.use('/public/',express.static(__dirname + '/public'));

app.get("/", function(req, res){
	res.render("index", {
		title: "首页",
		index_value: "这里是首页提供的变量值lalala"
	})
})

app.get("/test/", function(req, res){
	res.render("test", {
		title: "测试页面",
		test_value: "这是测试给出的一个变量值lalala"
	})
})

app.get("/blockdirs/", function(req, res){
    res.render("blockdirs", {
        title: "模块配置目录页面",
        test_value: "这是模块配置目录给出的一个变量值lalala"
    })
})

app.get("*", function(req, res){
	res.send("ok");
})

app.listen( app.get('port'), function(){
	console.log('listen to ' + app.get('port'));
} );
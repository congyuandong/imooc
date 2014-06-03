var express = require('express')
var port = process.env.PORT || 80
var app = express()

app.set('views','./views')
app.set('view engine','jade')
app.listen(port)

console.log('imooc started on port '+port)

add.get('/',function(req,res){
	res.render('detail',{
		title:'imooc 首页'
	})
})

add.get('/movie/:id',function(req,res){
	res.render('detail',{
		title:'imooc 详情页'
	})
})

add.get('/admin/movie',function(req,res){
	res.render('detail',{
		title:'imooc 后台录入页面'
	})
})

add.get('/admin/list',function(req,res){
	res.render('detail',{
		title:'imooc 列表页'
	})
})
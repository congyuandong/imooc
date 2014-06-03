var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var port = process.env.PORT || 80
var app = express()

app.set('views','./views/pages')
app.set('view engine','jade')
app.use(bodyParser())
app.use(express.static(path.join(__dirname,'bower_components')))
app.listen(port)

console.log('imooc started on port '+port)

app.get('/',function(req,res){
	res.render('index',{
		title:'imooc 首页',
		movies:[{
			title:'机械战警',
			_id:1,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'机械战警',
			_id:2,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'机械战警',
			_id:3,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'机械战警',
			_id:4,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'机械战警',
			_id:5,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		}
		,{
			title:'机械战警',
			_id:6,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		}]
	})
})

app.get('/movie/:id',function(req,res){
	res.render('/movie/:id',{
		title:'imooc 详情页',
		movie:{
			doctor:'何塞',
			country:'美国',
			title:'机械战警',
			year:2014,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			language:'英语',
			flash:'http://player.youku.com/player.php/sid/XNjM3Njc3MTY4/v.swf',
			summary:'哈哈哈'
		}
	})
})

app.get('/admin/movie',function(req,res){
	res.render('/admin/movie',{
		title:'imooc 后台录入页面',
		movie:{
			doctor:'',
			country:'',
			title:'',
			year:'',
			poster:'',
			language:'',
			flash:'',
			summary:''
		}
	})
})

app.get('/admin/list',function(req,res){
	res.render('/admin/list',{
		title:'imooc 列表页',
		movies:[{
			title:'机械战警',
			_id:1,
			doctor:'何塞',
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			country:'美国',
			year:'2014',
			language:'英语',
			flash:'http://player.youku.com/player.php/sid/XNjM3Njc3MTY4/v.swf',
			summary:'你好啊'
		}]
	})
})

var express = require('express')
var path = require('path')
var port = process.env.PORT || 80
var app = express()

app.set('views','./views/pages')
app.set('view engine','jade')
app.use(express.bodyParser())
app.use(express.static(path.join(__dirname,'bower_components')))
app.listen(port)

console.log('imooc started on port '+port)

app.get('/',function(req,res){
	res.render('detail',{
		title:'imooc 首页',
		movies:[{
			title:'机械战警',
			_id:1,
			poster:'http://image.baidu.com/i?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=%E6%9C%BA%E6%A2%B0%E6%88%98%E8%AD%A6&step_word=&ie=utf-8&in=25219&cl=2&lm=-1&st=&pn=0&rn=1&di=778702320&ln=1951&fr=&&fmq=1401814447122_R&ic=&s=&se=&sme=0&tab=&width=&height=&face=&is=&istype=&ist=&jit=&objurl=http%3A%2F%2Fpic19.nipic.com%2F20120305%2F5056539_180548610106_2.jpg'
		},{
			title:'机械战警',
			_id:2,
			poster:'http://image.baidu.com/i?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=%E6%9C%BA%E6%A2%B0%E6%88%98%E8%AD%A6&step_word=&ie=utf-8&in=25219&cl=2&lm=-1&st=&pn=0&rn=1&di=778702320&ln=1951&fr=&&fmq=1401814447122_R&ic=&s=&se=&sme=0&tab=&width=&height=&face=&is=&istype=&ist=&jit=&objurl=http%3A%2F%2Fpic19.nipic.com%2F20120305%2F5056539_180548610106_2.jpg'
		},{
			title:'机械战警',
			_id:3,
			poster:'http://image.baidu.com/i?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=%E6%9C%BA%E6%A2%B0%E6%88%98%E8%AD%A6&step_word=&ie=utf-8&in=25219&cl=2&lm=-1&st=&pn=0&rn=1&di=778702320&ln=1951&fr=&&fmq=1401814447122_R&ic=&s=&se=&sme=0&tab=&width=&height=&face=&is=&istype=&ist=&jit=&objurl=http%3A%2F%2Fpic19.nipic.com%2F20120305%2F5056539_180548610106_2.jpg'
		},{
			title:'机械战警',
			_id:4,
			poster:'http://image.baidu.com/i?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=%E6%9C%BA%E6%A2%B0%E6%88%98%E8%AD%A6&step_word=&ie=utf-8&in=25219&cl=2&lm=-1&st=&pn=0&rn=1&di=778702320&ln=1951&fr=&&fmq=1401814447122_R&ic=&s=&se=&sme=0&tab=&width=&height=&face=&is=&istype=&ist=&jit=&objurl=http%3A%2F%2Fpic19.nipic.com%2F20120305%2F5056539_180548610106_2.jpg'
		},{
			title:'机械战警',
			_id:5,
			poster:'http://image.baidu.com/i?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=%E6%9C%BA%E6%A2%B0%E6%88%98%E8%AD%A6&step_word=&ie=utf-8&in=25219&cl=2&lm=-1&st=&pn=0&rn=1&di=778702320&ln=1951&fr=&&fmq=1401814447122_R&ic=&s=&se=&sme=0&tab=&width=&height=&face=&is=&istype=&ist=&jit=&objurl=http%3A%2F%2Fpic19.nipic.com%2F20120305%2F5056539_180548610106_2.jpg'
		}
		,{
			title:'机械战警',
			_id:6,
			poster:'http://image.baidu.com/i?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=%E6%9C%BA%E6%A2%B0%E6%88%98%E8%AD%A6&step_word=&ie=utf-8&in=25219&cl=2&lm=-1&st=&pn=0&rn=1&di=778702320&ln=1951&fr=&&fmq=1401814447122_R&ic=&s=&se=&sme=0&tab=&width=&height=&face=&is=&istype=&ist=&jit=&objurl=http%3A%2F%2Fpic19.nipic.com%2F20120305%2F5056539_180548610106_2.jpg'
		}]
	})
})

app.get('/movie/:id',function(req,res){
	res.render('detail',{
		title:'imooc 详情页',
		movie:{
			doctor:'何塞',
			country:'美国',
			title:'机械战警',
			year:2014,
			poster:'http://image.baidu.com/i?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=%E6%9C%BA%E6%A2%B0%E6%88%98%E8%AD%A6&step_word=&ie=utf-8&in=25219&cl=2&lm=-1&st=&pn=0&rn=1&di=778702320&ln=1951&fr=&&fmq=1401814447122_R&ic=&s=&se=&sme=0&tab=&width=&height=&face=&is=&istype=&ist=&jit=&objurl=http%3A%2F%2Fpic19.nipic.com%2F20120305%2F5056539_180548610106_2.jpg',
			language:'英语',
			flash:'',
			summary:'哈哈哈'
		}
	})
})

app.get('/admin/movie',function(req,res){
	res.render('detail',{
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
	res.render('detail',{
		title:'imooc 列表页',
		movies:[{
			title:'机械战警',
			_id:1,
			doctor:'何塞'
			poster:'http://image.baidu.com/i?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=%E6%9C%BA%E6%A2%B0%E6%88%98%E8%AD%A6&step_word=&ie=utf-8&in=25219&cl=2&lm=-1&st=&pn=0&rn=1&di=778702320&ln=1951&fr=&&fmq=1401814447122_R&ic=&s=&se=&sme=0&tab=&width=&height=&face=&is=&istype=&ist=&jit=&objurl=http%3A%2F%2Fpic19.nipic.com%2F20120305%2F5056539_180548610106_2.jpg'
			country:'美国',
			year:'2014',
			language:'英语',
			flash:'',
			summary:'你好啊'
		}]
	})
})

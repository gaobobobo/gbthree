var http=require("http");
var url = require('url');
var fs=require("fs");
http.createServer(function(request,response){

	// var arg = url.parse(req.url).query;  //方法一arg => aa=001&bb=002
    var arg = url.parse(request.url, true).query;  //方法二arg => { aa: '001', bb: '002' }
    console.log(arg.aa);//返回001
    console.log(arg.bb);//返回002
    //然后就可以根据所得到的数据处理了
    var a=parseInt(arg.aa);
    var b=parseInt(arg.bb);


	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200,{'Content-Type':'text/plain'});

	// 发送响应数据 "Hello World"
	// response.end('Hello World\n');
	console.log(a*b);
	// response.end(fs(./145630854135681.txt));
	response.end(""+a*b);
}).listen(8080);

//终端打印如下信1
console.log('Server running at http://127.0.0.1:8080/');
var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){
	if (req.url == '/about.html'){
		res.writeHead(200,{'content-type':'text/html'});
		res.write('this is about page');
		fs.createReadStream('./about.html').pipe(res);
	} else {

		res.writeHead(200,{'content-type':'text/html'});
		res.write('Your url is ' + req.url);
		res.end();
	}
});
server.listen(3000,function(){
	console.log('ket noi thanh cong');});

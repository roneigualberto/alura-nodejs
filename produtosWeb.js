var http = require('http');

var server = http.createServer(function(req, res){

	console.log('url', req.url);
	
	if(req.url == "/produtos"){
		res.end("<html><body><h1> Listando os produtos</h1></body></html>");
	}
	else {
		res.end("<html><body> Home da casa do código</body></html>");
	}


	
}).listen(3000,"localhost");

console.log('Servidor rodando');



var http = require('http');
var server = http.createServer(function(req, res){
	res.write("Hello world, its jai!");
	res.end();
});

server.listen(9000, function(){
	console.log('listening at port 9000');
});
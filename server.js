var http = require('http');
var server = http.createServer(function(req, res){
	res.write("Hello world, its jai!");
	res.end();
});

var port = process.env.PORT || 9001;

server.listen(port, function(){
	console.log('listening at port %d', port);
});
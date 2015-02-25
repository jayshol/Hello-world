var http = require('http');
var server = http.createServer(function(req, res){	
	res.write("Hello world, its jaisree!");
	res.end();
});

//var port = process.env.PORT || 9001;

server.listen(3000, function(){
	console.log('listening at port %d', 3000);
});
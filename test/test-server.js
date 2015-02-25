var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('Suite01', function(){
	

	it('Hello response', function(done){
			chai.request('http://localhost:3000').get('/').end(function(err, res){			
			expect('hello').to.be.equal(404);					
		});  
		
			done();
	});  
			
	
});
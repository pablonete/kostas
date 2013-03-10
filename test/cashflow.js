var should = require('should'),
	model = require('./movement_mock'),
	Cashflow = require('../models/cashflow').init(model);

describe('Cashflow', function() {
	describe('between Feb 11th and 21th', function() {
		it('returns 7 elements with movement values', function(done) {
			Cashflow.getAll('2/11/2013', '2/21/2013', function(err, results) {
				results.length.should.eql(7);
				results[0].date.should.eql('2/11/2013');
				results[0].description.should.eql('Retorno SS');
				results[0].amount.should.eql(355.68);
				results[0].account.should.eql('Panna');
				results[4].counterpart.should.eql('Univ');
				done();
			});
		});
	});

	describe('between Feb 11th and 21th', function() {
		it('balances were updated', function(done) {
			Cashflow.getAll('2/11/2013', '2/21/2013', function(err, results) {
				results[0].balances['Panna'].should.eql(9.21+355.68);
				results[0].balances['Univ'].should.eql(7418.37);
				results[6].balances['Panna'].should.eql(4.89);
				results[6].balances['Univ'].should.eql(7318.37);
				done();
			});
		});
	});
});

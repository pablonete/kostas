var should = require('should'),
	model = require('./movement_mock'),
	Cashflow = require('../models/cashflow').init(model);

describe('Cashflow', function() {
	describe('between Feb 11th and 21th', function() {
		it('returns 7 elements', function(done) {
			Cashflow.getAll('2/11/2013', '2/21/2013', function(err, results) {
				results.length.should.eql(7);
				done();
			});
		});
	});

	describe('between Feb 11th and 21th', function() {
		it('balances were updated', function(done) {
			Cashflow.getAll('2/11/2013', '2/21/2013', function(err, results) {
				results[6].balance['Panna'].should.eql(4.89);
				results[6].balance['Univ'].should.eql(7318.37);
				done();
			});
		});
	});
});

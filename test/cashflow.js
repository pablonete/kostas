var should = require('should'),
	Movement = require('./movement_mock'),
	Cashflow = require('../models/cashflow').init(Movement);

describe('Cashflow', function() {
	describe('with no arguments', function() {
		it('returns 7 elements (MOCK)', function(done) {
			Cashflow.getAll(function(err, results) {
				results.length.should.eql(7);
				done();
			})
		})
	})
})
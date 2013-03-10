var should = require('should'),
	models = require('../models/models');

describe('model Movements', function() {
	describe('with no arguments', function() {
		it('returns 7 elements (MOCK)', function(done) {
			models.Movement.getAll(function(err, results) {
				results.length.should.eql(7);
				done();
			})
		})
	})
})
(function() {
	var model;
	var Cashflow = function(date, description, amount, balance) {
		this.date = date;
		this.description = description;
		this.amount = amount;
		this.balance = balance;
	};

	Cashflow.init = function (modelArg) {
		model = modelArg;
		return this;
	};

	Cashflow.getAll = function(from, to, callback) {
		model.getBalances(from, function(err, balancesBefore) {			
			model.getMovements(from, to, function(err, movements) {
				var result = [];
				var balance = balancesBefore[0].balance;
				for(var i = 0; i<movements.length; i++) {
					var movement = movements[i];
					balance = Math.round((balance+movement.amount)*100)/100;
					result.push(new Cashflow(
						movement.date,
						movement.description,
						movement.amount,
						balance));
				}

				callback(null, result);
			});
		});
	};

	module.exports = Cashflow;
})();
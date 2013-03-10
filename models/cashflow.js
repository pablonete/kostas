(function() {
	var model;
	var Cashflow = function(movement, balances) {
		this.date = movement.date;
		this.description = movement.description;
		this.amount = movement.amount;
		this.account = movement.account;
		this.counterpart = movement.counterpart;
		this.balances = balances;
	};

	Cashflow.init = function (modelArg) {
		model = modelArg;
		return this;
	};

	var applyMovement = function(balances, amount, account, counterpart) {
		var result = {};
		for(var balanceAccount in balances) {
			var factor =
				balanceAccount === account
					? 1
					: balanceAccount === counterpart
						? -1
						: 0;
			result[balanceAccount] = Math.round((balances[balanceAccount] + factor*amount)*100)/100;			
		}
		return result;
	};

	Cashflow.getAll = function(from, to, callback) {
		model.getBalances(from, function(err, balances) {			
			model.getMovements(from, to, function(err, movements) {
				var result = [];
				for(var i = 0; i<movements.length; i++) {
					var movement = movements[i];
					balances = applyMovement(balances, movement.amount, movement.account, movement.counterpart);
					result.push(new Cashflow(movement, balances));
				}

				callback(null, result);
			});
		});
	};

	module.exports = Cashflow;
})();
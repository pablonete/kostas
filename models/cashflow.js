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

	var applyMovement = function(balances, amount, account, counterpart) {
		balances[account] += amount;
		balances[account] = Math.round(balances[account]*100)/100;
		if(typeof counterpart !== undefined) {
			balances[counterpart] -= amount;
			balances[counterpart] = Math.round(balances[counterpart]*100)/100;			
		}
		return balances;
	};

	Cashflow.getAll = function(from, to, callback) {
		model.getBalances(from, function(err, balances) {			
			model.getMovements(from, to, function(err, movements) {
				var result = [];
				for(var i = 0; i<movements.length; i++) {
					var movement = movements[i];
					balances = applyMovement(balances, movement.amount, movement.account, movement.counterpart);
					result.push(new Cashflow(
						movement.date,
						movement.description,
						movement.amount,
						balances));
				}

				callback(null, result);
			});
		});
	};

	module.exports = Cashflow;
})();
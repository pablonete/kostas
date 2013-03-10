(function() {
	var Movement;
	var Cashflow = function(date, description, amount, balance) {
		this.date = date;
		this.description = description;
		this.amount = amount;
		this.balance = balance;
	};

	Cashflow.init = function (movement) {
		Movement = movement;
		return this;
	};

	Cashflow.getAll = function(callback) {
		Movement.getAll(function(err, movements) {
			var result = [];
			for(var i = 0; i<movements.length; i++) {
				result.push(movements[i]);
			}

			callback(null, result);
		});
	};

	module.exports = Cashflow;
})();
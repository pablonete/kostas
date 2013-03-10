(function() {
	var models = exports;

	models.Movement = function(date, description, amount) {
		this.date = date;
		this.description = description;
		this.amount = amount;
	};

	models.Movement.getAll = function(callback) {
		callback(null, [
			new models.Movement('2/11/2013','Retorno SS', 355.68),
			new models.Movement('2/14/2013','Seguro médico', -100),
			new models.Movement('2/14/2013','Asesor', -40),
			new models.Movement('2/14/2013','Endesa', -100),
			new models.Movement('2/18/2013','Retorno', 100),
			new models.Movement('2/18/2013','Comunidad', -200),
			new models.Movement('2/21/2013','Cajero', -20)
		]);
	};

	models.Cashflow = function(date, description, amount, balance) {
		this.date = date;
		this.description = description;
		this.amount = amount;
		this.balance = balance;
	};

	models.Cashflow.getAll = function(callback) {
		models.Movement.getAll(function(err, movements) {
			var result = {};
			for(var i = 0; i<movements.length; i++) {

			}

			callback(result);
		});
	};
})();
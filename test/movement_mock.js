(function() {
	var model = exports;

	model.Movement = function(date, description, amount) {
		this.date = date;
		this.description = description;
		this.amount = amount;
	};

	model.Balance = function(date, account, balance) {
		this.date = date;
		this.account = account;
		this.balance = balance;
	}

	model.getMovements = function(from, to, callback) {
		callback(null, [
			new model.Movement('2/11/2013','Retorno SS', 355.68),
			new model.Movement('2/14/2013','Seguro médico', -100),
			new model.Movement('2/14/2013','Asesor', -40),
			new model.Movement('2/14/2013','Endesa', -100),
			new model.Movement('2/18/2013','Retorno', 100),
			new model.Movement('2/18/2013','Comunidad', -200),
			new model.Movement('2/21/2013','Cajero', -20)
		]);
	};

	model.getBalances = function(date, callback) {
		callback(null, [
			new model.Balance('2/11/2013', 'Panna', 9.21)
		]);
	};
})();
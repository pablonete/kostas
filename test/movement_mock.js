(function() {
	var model = exports;

	model.Movement = function(date, description, amount, account, counterpart) {
		this.date = date;
		this.description = description;
		this.amount = amount;
		this.account = account;
		this.counterpart = counterpart;
	};

	model.getMovements = function(from, to, callback) {
		callback(null, [
			new model.Movement('2/11/2013','Retorno SS', 355.68, 'Panna'),
			new model.Movement('2/14/2013','Seguro médico', -100, 'Panna'),
			new model.Movement('2/14/2013','Asesor', -40, 'Panna'),
			new model.Movement('2/14/2013','Endesa', -100, 'Panna'),
			new model.Movement('2/18/2013','Retorno', 100, 'Panna', 'Univ'),
			new model.Movement('2/18/2013','Comunidad', -200, 'Panna'),
			new model.Movement('2/21/2013','Cajero', -20, 'Panna')
		]);
	};

	model.getBalances = function(date, callback) {
		callback(null, {
			'Panna': 9.21,
			'Univ': 7418.37
		});
	};
})();
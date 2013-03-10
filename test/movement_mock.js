(function() {
	var Movement = function(date, description, amount) {
		this.date = date;
		this.description = description;
		this.amount = amount;
	};

	Movement.getAll = function(callback) {
		callback(null, [
			new Movement('2/11/2013','Retorno SS', 355.68),
			new Movement('2/14/2013','Seguro médico', -100),
			new Movement('2/14/2013','Asesor', -40),
			new Movement('2/14/2013','Endesa', -100),
			new Movement('2/18/2013','Retorno', 100),
			new Movement('2/18/2013','Comunidad', -200),
			new Movement('2/21/2013','Cajero', -20)
		]);
	};

	module.exports = Movement;
})();
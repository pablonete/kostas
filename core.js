var app = require('express')(),
	jade = require('jade'),
	//model = require('./models/model-in-memory.js'),
	model = require('./test/movement_mock.js'),
	Cashflow = require('./models/cashflow.js').init(model);

app.set('view engine', 'jade');
app.set('view options', {layout: false});

app.get('/*.(js|css)', function(req, res){
	res.sendfile('./'+req.url)
});

app.get('/', function(req, res) {
	res.render('cashflow');
});

app.get('/api', function(req, res) {
	res.send('Kostas API is running');
});

app.get('/api/cashflow', function(req, res) {
	return Cashflow.getAll(req.query["from"], req.query["to"], function(err, lines) {
		if(!err)
			res.send(lines);
		else
			console.log(err);
	});
});

app.listen(8000);
console.log('Kostas server listening to port 8000...');
var app = require('express')(),
	jade = require('jade');

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

app.listen(8000);
console.log('Kostas server listening to port 8000...');
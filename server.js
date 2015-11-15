var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');


app.use(express.static(path.join(__dirname, '/client')));
app.use(bodyParser.json());

require('./config/mongoose.js')
require('./config/routes.js')(app);

app.listen(2387, function(){
	console.log('listening on port 2387');
})
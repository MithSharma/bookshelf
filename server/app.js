var express = require('express');
var app = new express();
var mongoose = require('mongoose');

var config = require('./config');
var port = process.env.port || 3000;
app.use('/', express.static(__dirname + '/public'));
// var setupController = require('./controller/setupController');
var apiController = require('./controller/apiController');
app.set('view engine', 'ejs');



mongoose.connect(config.getConnectionString(),{ useNewUrlParser: true });
// setupController(app); one time data setup call
apiController(app);
app.listen(port, () => {
    console.log("Server is listening on port 3000");
});
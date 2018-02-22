var express = require('express');
var app = express();


// Define the port to run on
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/src'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('server listening on port' + port);
});

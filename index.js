var express = require('express');
var app = express();


// Define the port to run on
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/src'));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('server listening on port' + port);
});

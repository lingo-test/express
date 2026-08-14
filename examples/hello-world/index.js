'use strict'

var express = require('../../');

var app = module.exports = express()

app.get('/', function(req, res){
  res.send('Hello World');
});

/* istanbul ignore next */
if (!module.parent) {
  var port = process.env.PORT || 8000;
  app.listen(port, '0.0.0.0');
  console.log('Express started on port ' + port);
}

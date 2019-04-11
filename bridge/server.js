var express = require('express');
var app = express();

// v1
const v1 = require('./versions/v1');
app.use('/v1', v1);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


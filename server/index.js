var path = require('path');
var express = require('express');
var app = express();


app.use(express.static(path.resolve(__dirname, '../build')));

app.get('/', function (req, res) {
  res.sendFile( path.resolve(__dirname, '../index.html'));
});

app.listen(process.env.PORT || 3010, function () {
  console.log('Example app listening on port 3010!');
});
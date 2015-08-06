var http = require('http')
  , file = require('fs');

http.createServer(function(req, res) {

  file.createReadStream(__dirname + '/data/oneRing.txt').pipe(res);
  file.createReadStream(__dirname + '/data/Ozymandias.txt').pipe(res);

}).listen(8080);

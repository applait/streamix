var http = require('http')
  , file = require('fs')
  , strm = require('event-stream');

http.createServer(function(req, res) {

  strm.merge([
    file.createReadStream(__dirname + '/data/oneRing.txt'),
    file.createReadStream(__dirname + '/data/Ozymandias.txt')
  ]).pipe(res);

}).listen(8080);

var http = require('http')
  , file = require('fs');

http.createServer(function(req, res) {

  var ringStream = file.createReadStream(__dirname + '/data/oneRing.txt');
  var ozStream =  file.createReadStream(__dirname + '/data/Ozymandias.txt');

  ringStream.pipe(res);
  ozStream.pipe(res);

  ringStream.on('error', function(err) {
    res.end(err);
  });
  ozStream.on('error', function(err) {
    res.end(err);
  });

}).listen(8080);

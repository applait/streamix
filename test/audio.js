var http = require('http')
  , file = require('fs')
  , conv = require('avconv');

var params = [
  '-i', (__dirname + '/data/MayItBe.m4a'),
  '-i', (__dirname + '/data/CouncilOfElrond.m4a'),
  '-f', 'ac3',
  '-c:a', 'ac3',
  '-filter_complex',
  'amix', 'inputs=2:duration=longest',
  '-y', (__dirname + '/data/audioMix.ac3')
];
 
// Returns a duplex stream 
var stream = conv(params);
 
// Anytime avconv outputs any information, forward these results to process.stdout 
stream.on('message', function(data) {
    console.log(data);
})

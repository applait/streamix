var mix = require('../src/index');

var params = [
  '-i', (__dirname + '/data/MayItBe.m4a'),
  '-i', (__dirname + '/data/CouncilOfElrond.m4a'),
  '-f', 'ac3',
  '-c:a', 'ac3',
  '-filter_complex', 'amix=inputs=2:duration=longest',
  '-y', (__dirname + '/data/audioMix.ac3')
];

mix(params);

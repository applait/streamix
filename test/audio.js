var mix = require('../src/index');

var params = {
  inputs: [
    (__dirname + '/data/MayItBe.m4a'),
    (__dirname + '/data/CouncilOfElrond.m4a')
  ],
  output: (__dirname + '/data/audioMix.ac3'),
  profile: 'audio-mix-ac3'
}

mix(params);

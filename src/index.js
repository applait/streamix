var avconv = require('avconv')
  , profiles = require('./profiles');

module.exports = function (config, next) {
  var params = [];

  for (var i in config.inputs) {
    params.push('-i', config.inputs[i])
  }

  params = params.concat(profiles[config.profile]);

  params.push('-y', config.output);

  avconv(params);
  if (next && (next instanceof Function)) next();
}

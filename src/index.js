var avconv = require('avconv');

module.exports = function (params, next) {
  avconv(params);
  if (next && (next instanceof Function)) next();
}

var babel = require('babel-core');
var path = require('path');

var pkg = require('./package.json');

module.exports = function(options, callback) {
  var context = this;
  var contents = context.contents.toString();
  if (!contents.trim()) {
    return callback();
  }

  options = Object.assign({
    extends: path.resolve(__dirname, '.babelrc'),
    ast: false,
  }, options);

  try {
    var result = babel.transform(contents, options);
    context.contents = new Buffer(result.code);
  } catch (err) {
    return callback(err);
  }

  return callback();
};

module.exports.toString = function() {
  return [pkg.name, pkg.version].join('@');
};

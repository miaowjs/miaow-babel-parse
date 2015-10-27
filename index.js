var babel = require('babel-core');

var pkg = require('./package.json');

module.exports = function(options, callback) {
  var context = this;
  var contents = context.contents.toString();
  if (!contents.trim()) {
    return callback();
  }

  try {
    context.contents = new Buffer(babel.transform(contents, options).code);
  } catch (err) {
    return callback(err);
  }

  callback();
}

module.exports.toString = function() {
  return [pkg.name, pkg.version].join('@');
};

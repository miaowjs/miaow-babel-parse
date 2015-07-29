var mutil = require('miaow-util');
var babel = require('babel-core');

var pkg = require('./package.json');

function parse(option, cb) {
  var contents = this.contents.toString();
  if (!contents.length) {
    return cb();
  }

  this.contents = new Buffer(babel.transform(contents, option).code);
  cb();
}

module.exports = mutil.plugin(pkg.name, pkg.version, parse);

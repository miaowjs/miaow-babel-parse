var mutil = require('miaow-util');
var babel = require('babel-core');

var pkg = require('./package.json');

function parse(option, cb) {
  this.contents = new Buffer(babel.transform(this.contents.toString(), option).code);
  cb();
}

module.exports = mutil.plugin(pkg.name, pkg.version, parse);

var babel = require('babel-core');

module.exports = function (option, cb) {
  this.contents = new Buffer(babel.transform(this.contents.toString(), option).code);
  cb();
};



exports.post = function (options, res) {
  res.body = res.read();
};
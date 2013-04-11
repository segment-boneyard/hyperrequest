

exports.post = function (options, res, next) {
  var chunks = [];
  res
    .on('data', function (chunk) { chunks.push(chunk); })
    .on('end',  function () {
    res.body = Buffer.concat(chunks).toString();
    next();
  });
};
var stringify = require('json-stringify-safe');


exports.pre = function (options, req) {
  if (!options.json) return;

  if (!req.getHeader('accept') && ! req.getHeader('Accept'))
    req.setHeader('accept', 'application/json');

  req.setHeader('content-type', 'application/json');
  req.body = stringify(options.json);
};


exports.post = function (options, res) {
  try {
    res.body = JSON.parse(res.body);
  } catch (e) {
    res.body = {};
  }
};
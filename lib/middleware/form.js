var qs = require('qs');


exports.pre = function (options, req) {
  if (!options.form) return;

  req.setHeader('content-type', 'application/x-www-form-urlencoded; charset=utf-8');
  req.body = qs.stringify(options.form).toString('uft8');
};


var hq         = require('hyperquest')
  , middleware = require('./middleware');


module.exports = hyperrequest;


function hyperrequest (uri, options, callback) {

  if (typeof uri !== 'string') {
    callback = options;
    options  = uri;
    uri      = options.uri || options.url;
  }

  if (typeof options === 'function') {
    callback = options;
    options  = {};
  }

  options.uri = uri;

  var cb;
  if (callback) {
    cb = function (err, res) {
      if (err) return callback(err);
      middleware.post(options, res);
      debugger;
      callback(err, res, res.body);
    };
  }

  var req = hq(uri, options, cb);
  middleware.pre(options, req);
  if (req.body) req.write(req.body);
  return req;
}


function convenienceMethod (method) {
  return function (uri, options, callback) {
    options || (options = {});
    options.method = method;
    options.uri = uri;
    return hyperrequest(uri, options, callback);
  };
}


hyperrequest.get  = convenienceMethod('GET');
hyperrequest.post = convenienceMethod('POST');
hyperrequest.head = convenienceMethod('HEAD');
hyperrequest.del  = convenienceMethod('DELETE');


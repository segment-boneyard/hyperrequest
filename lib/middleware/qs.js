var qs     = require('qs')
  , extend = require('extend');


exports.pre = function (options, req) {
  if (!options.qs) return;

  var uri   = req.getLocation()
    , query = qs.parse(uri);

  extend(query, options.qs);
  req.setLocation(uri.split('?')[0] + qs.stringify(query));
};

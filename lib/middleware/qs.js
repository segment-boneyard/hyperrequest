var qs       = require('qs')
  , defaults = require('defaults');


exports.pre = function (options, req) {
  if (!options.qs) return;

  var uri   = req.getLocation()
    , query = qs.parse(uri.split('?')[1]);

  extend(query, options.qs);
  req.setLocation(uri.split('?')[0] + '?' + qs.stringify(query));
};

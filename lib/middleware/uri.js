var extend = require('s-extend')
  , url    = require('url');


exports.pre = function (options, req) {
  var uri = req.getLocation();
  extend(req, url.parse(uri));
};

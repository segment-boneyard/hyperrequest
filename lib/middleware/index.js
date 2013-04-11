var async = require('async')
  , body  = require('./body')
  , json  = require('./json')
  , form  = require('./form')
  , qs    = require('./qs')
  , uri   = require('./uri');


var middleware = [
  body,
  json,
  form,
  qs,
  uri
];


exports.pre = function (options, req) {
  middleware.forEach(function (item) {
    if (item.pre) item.pre(options, req);
  });
};


exports.post = function (options, res, callback) {
  async.forEachSeries(middleware, function (item, next) {
    if (item.post) item.post(options, res, next);
    else next();
  }, callback);
};
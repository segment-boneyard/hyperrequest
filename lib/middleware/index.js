var body  = require('./body')
  , json  = require('./json')
  , form  = require('./form')
  , qs    = require('./qs');


var middleware = [
  body,
  json,
  form,
  qs
];


exports.pre = function (options, req) {
  middleware.forEach(function (item) {
    if (item.pre) item.pre(options, req);
  });
};


exports.post = function (options, res) {
  middleware.forEach(function (item) {
    if (item.post) item.post(options, res);
  });
};
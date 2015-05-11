var restify = require('restify');
var call = require('./call');
var action = require('./action');
var twiml = require('./twiml');

/**
 * Setup the server
 */
var server = restify.createServer({
  name: 'call',
  version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

/**
 * Call
 */
server.post('/call', function (req, res, next) {
  call(req, res);
  return next();
});

/**
 * Twiml
 */
server.post('/twiml/:id', function (req, res, next) {
  twiml(req, res);
  return next();
});

/**
 * Action
 */
server.post('/action', function (req, res, next) {
  action(req, res)
  return next();
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});






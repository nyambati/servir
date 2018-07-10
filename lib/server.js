const express = require('express');
const compression = require('compression');
const {
  accessLogger,
  errorLogger,
  forceHttpsRedirect
} = require('./middlewares');

const app = express();

app.use(compression());

function setUpServer(options) {
  // Force Https redirection when set to true
  app.use(forceHttpsRedirect(options.https));

  // Setup access logs
  app.use(
    accessLogger(options.logsDir, options.app, options.rotate, options.logstash)
  );

  app.use('/*', express.static(options.dir));

  app.use(
    errorLogger(options.logsDir, options.app, options.rotate, options.logstash)
  );

  return app;
}

module.exports = setUpServer;

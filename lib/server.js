const express = require("express");
const compression = require("compression");
const {
  accessLogger,
  errorLogger,
  forceHttpsRedirect
} = require("./middlewares");

const app = express();

app.use(compression());

function setUpServer(options) {
  // Force Https redirection when set to true
  app.use(forceHttpsRedirect(options.s || options.secure));

  // Setup access logs
  app.use(
    accessLogger(
      options.d || options.logsDir,
      options.a || options.app,
      options.r || options.rotate,
      options.l || options.logstash
    )
  );

  app.use("/*", express.static(options.public));

  app.use(
    errorLogger(options.logsDir, options.app, options.rotate, options.logstash)
  );

  return app;
}

module.exports = setUpServer;

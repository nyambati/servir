const Middlewares = require("../lib/middlewares");
const compression = require("compression");

class Server {
  constructor(options) {
    this.options = options;
    this.express = require("express");
    this.instance = this.express();
    this.middlewares();
  }

  middlewares() {
    const middlewares = new Middlewares(
      this.options.d || this.options.logsDir,
      this.options.a || this.options.app,
      this.options.r || this.options.rotate,
      this.options.l || this.options.logstash,
      this.options.s || this.options.secure
    );

    // Add compression to served files
    this.instance.use(compression());
    // Force https redirections when specified
    this.instance.use(middlewares.forceHttpsRedirect());
    // Use winston access logger for all access logs
    this.instance.use(middlewares.accessLogger());
    // Setup public directory where all the files will be served from
    this.instance.use("/*", this.express.static(this.options.public));
    // Use winston error logger for all error logs
    this.instance.use(middlewares.errorLogger());

    return this.instance;
  }
}

module.exports = Server;

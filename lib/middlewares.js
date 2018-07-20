const { format, createLogger, transports } = require("winston");
const fs = require("fs");
const expressWinston = require("express-winston");
require("winston-daily-rotate-file");

class Middlewares {
  constructor(folderName, application, rotateLogs, enableLogstash, secure) {
    this.folder = folderName;
    this.application = application;
    this.rotateLogs = this.isBoolean(rotateLogs);
    this.enableLogstash = this.isBoolean(enableLogstash);
    this.secure = this.isBoolean(secure);
    this.prefix = this.application || "combined";
    this.createLogFolder(this.folder);
  }

  isBoolean(value) {
    return /true/.test(value);
  }

  accessLogger() {
    let accessTransportsArray = [
      new transports.Console({
        format: format.json()
      })
    ];

    // if rotate is specified
    if (this.rotateLogs) {
      accessTransportsArray = [
        ...accessTransportsArray,
        new transports.DailyRotateFile({
          filename: `${this.folder}/${this.prefix}-access-%DATE%.log`,
          zippedArchive: true
        })
      ];
    }

    if (this.enableLogstash) {
      accessTransportsArray = [
        ...accessTransportsArray,
        new transports.DailyRotateFile({
          format: format.logstash(),
          filename: `${this.folder}/logstash-access-%DATE%.log`,
          zippedArchive: true
        })
      ];
    }

    return expressWinston.logger({
      winstonInstance: createLogger({
        transports: accessTransportsArray
      })
    });
  }

  errorLogger() {
    let errorTransportArray = [
      new transports.Console({
        format: format.json()
      })
    ];

    // if rotate is specified
    if (this.rotateLogs) {
      errorTransportArray = [
        ...errorTransportArray,
        new transports.DailyRotateFile({
          filename: `${this.folder}/${this.prefix}-error-%DATE%.log`,
          zippedArchive: true
        })
      ];
    }

    if (this.enableLogstash) {
      errorTransportArray = [
        ...errorTransportArray,
        new transports.DailyRotateFile({
          format: format.logstash(),
          filename: `${this.folder}/logstash-error-%DATE%.log`,
          zippedArchive: true
        })
      ];
    }

    return expressWinston.errorLogger({
      winstonInstance: createLogger({
        transports: errorTransportArray
      })
    });
  }

  createLogFolder(folderName) {
    fs.existsSync(folderName) || fs.mkdirSync(folderName);
    return folderName;
  }

  forceHttpsRedirect(https, status) {
    status = status || 302;
    return (req, res, next) => {
      if (!this.secure) return next();
      if (req.headers["x-forwarded-proto"] == "https") return next();
      return res.redirect(status, `https://${req.get('host') + req.originalUrl}`);
    };
  }
}

module.exports = Middlewares;

// app.js
const http = require("http");

const log4js = require("log4js");
log4js.configure("log-config.json");
const logger = log4js.getLogger("access");

module.exports = {
  listen: function(port) {
    http.createServer(function (req, res) {
      logger.info(`:${port} - request=${req.url}`);
      res.write("Hello World");
      res.end();
    }).listen(port);

    logger.info(`listens on port ${port}`);
  }
};


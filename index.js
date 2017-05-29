// index.js
const program = require("commander");
const app = require("./app");

program.version("1.0.0")
  .option("-p, --port [number]", "listen port number [default: 8080]", 8080)
  .parse(process.argv);

// http server
app.listen(program.port);

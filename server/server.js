// server.js
// tslint:disable:no-console
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
var path = require("path");
const app = express();

const config = {
  port: 9090,
};

app.set("config", config);

app.use(bodyParser.json()); // for parsing application/json

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
); // for parsing application/x-www-form-urlencoded

app.use("/images", express.static(path.join(__dirname, "images")));

// CORS

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

// Just use a simple json with name as configuration
const files = fs.readdirSync("./server/mocks");

files.forEach((file) => {
  const [, verb, route] = file.match(/([^_]+)_(.+)\.json/);

  app[verb.toLowerCase()]("/api/" + route, (req, res) =>
    res.send(require("./mocks/" + file))
  );
});

// For others case, create your own route with express
const apiFiles = fs.readdirSync("./server/api");

apiFiles.forEach((file) => {
  require("./api/" + file)(app);
});

if (!module.parent) {
  // Allow the launcher to start the servers itself when run directly
  // `node server.js` case.
  start(app, config);
  // Handle graceful shutdown
  process.on("message", (msg) => {
    // We only handle shutdown messages
    if (msg !== "shutdown") {
      return;
    }
    stop(app);
  });
} else {
  exports.app = app;
  exports.config = config;
  exports.start = start;
  exports.stop = stop;
}

function start(application, configuration) {
  return application.listen(configuration.port, () => {
    console.log(
      `Listening on port ${configuration.port} - ${application.settings.env} mode`
    );
  });
}

function stop(server) {
  console.log("Server is going down... 1s before force shutdown.");
  server.close();
  setTimeout(() => {
    console.log("Forcing shutdown...");
    process.exit(0);
  }, 1000);
}

var http = require("http");
var dt = require("./date.js");
var fs = require("./fibonacciseries");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("The date and time are currently: " + dt.myDateTime());
    res.write("");
    res.write("Fibonacii series is: " + fs.myFibonacci());
    res.write("");
    res.end("Hello World!");
  })
  .listen(8080);

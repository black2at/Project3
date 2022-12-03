const http = require("http");
const data = require("../project3/items.json")

//basic nodejs server
const server = http.createServer((req, res) => {
  //url for sending the data from the json file items.json
    if (req.url === "/api") {
      res.writeHead(200, {"Content-Type": "text/json"});
      res.end(JSON.stringify(data));
    } else {
      res.writeHead(404, {"Content-Type": "text/plain"});
      res.end("Data not found");
    }
});


server.listen(5000);
console.log("Server is listening on port 5000");
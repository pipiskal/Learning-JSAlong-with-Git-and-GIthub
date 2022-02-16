// what is require function??

const http = require("http");
const url = require("url");

// CREATING A SIMPLE WEB SERVER

//we created the server with http.createServer and we passed a callback function
// that gets called each time the server has a new request
const server = http.createServer((request, response) => {
  const pathName = request.url;

  if (pathName === "/overview") {
    response.end("This is an overview of the url");
  } else if (pathName === "/product") {
    response.end("This is the product");
  } else {
    response.writeHead("404");
    response.end("Page not Found");
  }
});

// we listen on 127.0,0.1:8000
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});

// implementing simple routing

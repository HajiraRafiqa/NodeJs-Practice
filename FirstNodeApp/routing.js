var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res)
{
    console.log("request was made: " + req.url);
    if(req.url === "/home" || req.url === "/")
    {
        res.writeHead(200, {"ContentType" : "text/html"});
        fs.createReadStream(__dirname + "/index.html").pipe(res);
    }
    else if(req.url === "/contact")
    {
        res.writeHead(200, {"ContentType" : "text/html"});
        fs.createReadStream(__dirname + "/contact.html").pipe(res);
    }
    else if(req.url === "/api/obj")
    {
        var obj = [
            {
                name : "abc",
                age : 20,
            },
            {
                name : "pqr",
                age : 30,
            }
        ]
        res.writeHead(200, {"ContentType" : "application/json"});
        res.end(JSON.stringify(obj));
    }
    else
    {
        res.writeHead(404, {"ContentType" : "text/html"});
        fs.createReadStream(__dirname + "/404.html").pipe(res);
    }
});

server.listen(3000, "127.0.0.1");
console.log("Hey ya! I'm listening on post 3000 ")
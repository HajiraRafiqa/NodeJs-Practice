
var http = require("http");
var fs = require("fs");
const path = require('path');

var myReadStream = fs.createReadStream(path.join(__dirname, "/readMe.txt"), 'utf8');

myReadStream.on("data", function(chunk)
{
    console.log("new chunk recieved:");
    console.log(chunk); 
});

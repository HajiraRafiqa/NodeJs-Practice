
var http = require("http");
var fs = require("fs");
const path = require('path');

var myReadStream = fs.createReadStream(path.join(__dirname, "/readMe.txt"), 'utf8');
var myWriteStream = fs.createWriteStream(path.join(__dirname, "/writeMe.txt"));

myReadStream.on("data", function(chunk)
{
    console.log("new chunk recieved:");
    myWriteStream.write(chunk);

});

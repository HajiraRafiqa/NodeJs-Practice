
/*
// Create a timer that counts time until 5 seconds
var time = 0;

var timer = setInterval(function() 
{
    time += 2; 
    console.log(time + " secs have passed");

    if(time > 5)
    {
        clearInterval(timer);
    }
}, 2000);


// Display directory names and filename
console.log(__dirname);
console.log(__filename);


// Modules
var stuff = require("./stuff");

console.log(stuff.counter(["asd", "ahdbd", "sjbsd", "njb"])); 

*/

// var events = require("events");
/*
var myEmitter = new events.EventEmitter();

myEmitter.on("someEvent", function(msg)
{
    console.log(msg);

});

myEmitter.emit("someEvent", "The event was emitted");




var util = require("util");


var Person = function(name)
{
    this.name = name; 
}

util.inherits(Person, events.EventEmitter);

var abc = new Person("abc");
var pqr = new Person("pqr");
var xyz = new Person("xyz");

var people = [abc, pqr, xyz];

people.forEach(function(person)
{
    person.on("speak", function(msg)
    {
        console.log(person.name + " said: " + msg);
    });
}); 

abc.emit("speak", "Hello All!!");

*/

//var fs = require('fs');

//fs.promises.unlink('writeMe.txt')

//var readMe = fs.readFileSync("readMe.txt", "utf8");

//fs.writeFileSync("writeMe.txt", readMe);


//var fs = require("fs");

/*
fs.mkdir("stuff", function()
{
    fs.readFile('readMe.txt', 'utf8', function(err, data)
    {
        console.log(data);
        fs.promises.writeFile("./stuff/writeMe.txt", data)
    });
});


fs.promises.unlink("./stuff/writeMe.txt", function()
{
    fs.rmdir("stuff");
});



var http = require("http");

var server = http.createServer(function(req, res)
{
    console.log("request was made: " + req.url);
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hey all!!");
});

server.listen(3000, "127.0.0.1");
console.log("Hey ya! I'm listening on post 3000 ")
*/ 

var http = require("http");
var fs = require("fs");
const path = require('path');

var myReadStream = fs.createReadStream(path.join(__dirname, "/readMe.txt"));

myReadStream.on("data", function(chunk)
{
    console.log("new chunk recieved:");
    console.log(chunk); 
});
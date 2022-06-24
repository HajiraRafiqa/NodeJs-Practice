
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



var fs = require("fs");

var readMe = fs.readFileSync("readMe.txt", "utf8");

fs.writeFileSync("writeMe.txt", readMe);

*/

var fs = require("fs");

fs.mkdir("stuff", function()
{
    fs.readFile("readMe.txt", "utf8", function(err, data)
    {
        fs.writeFile("./stuff/writeMe.txt", data)
    });
});



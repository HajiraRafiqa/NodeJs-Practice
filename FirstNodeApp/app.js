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

var events = require("events");
var myEmitter = new events.EventEmitter();

myEmitter.on("someEvent", function(msg)
{
    console.log(msg);

});

myEmitter.emit("someEvent", "The event was emitted");

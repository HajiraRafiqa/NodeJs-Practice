/*
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




console.log(__dirname);
console.log(__filename);
*/

var stuff = require("./stuff");

console.log(stuff.counter(["asd", "ahdbd", "sjbsd", "njb"])); 
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
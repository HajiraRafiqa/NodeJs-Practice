var util = require("util");
var events = require("events");

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
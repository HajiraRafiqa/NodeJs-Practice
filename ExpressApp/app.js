var express = require("express");

var app = express();

app.get("/", function(req, res)
{
    res.send("this is a homepage")
});

app.get("/contact", function(req, res)
{
    res.send("this is a contactpage")
});


app.listen(3000);


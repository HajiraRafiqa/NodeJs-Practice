var express = require("express");

var app = express();

app.get("/", function(req, res)
{
    res.sendfile(__dirname + "/index.html")
});

app.get("/contact", function(req, res)
{
    res.send(__dirname + "./contact.html")
});
app.get("/profile/:name/", function(req, res)
{
    res.send("This is the page of id: " + req.params.name)
});

app.listen(3000);


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
app.get("/profile/:id/", function(req, res)
{
    res.send("This is the page of id: " + req.params.id)
});


app.listen(3000);


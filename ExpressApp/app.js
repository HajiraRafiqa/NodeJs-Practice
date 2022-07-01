var express = require("express");



var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res)
{
    res.render("index.ejs")
});

app.get("/contact", function(req, res)
{
    res.render("contact.ejs")
});
app.get("/profile/:name/", function(req, res)
{
    var data = {age: 20, job: "dev", hobbies: ["eating", "fighting", "fishing"]};
    res.render("profile.ejs", { person : req.params.name, data: data});

});

app.listen(3000);


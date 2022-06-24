var fs = require("fs");

fs.promises.unlink("./stuff/writeMe.txt", function()
{
    fs.rmdir("stuff");
});
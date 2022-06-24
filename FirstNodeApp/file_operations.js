var fs = require('fs');

fs.promises.unlink('writeMe.txt')

var readMe = fs.readFileSync("readMe.txt", "utf8");

fs.writeFileSync("writeMe.txt", readMe);
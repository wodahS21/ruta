var fs = require("fs");
console.log("\nAbriendo Archivo... ");

var content = fs.readFile("quijote.txt", "utf8", function(error, content){
    console.log(content)
})
console.log(content);

console.log("\nHaciendo otra cosa.");
console.log(process.uptime());
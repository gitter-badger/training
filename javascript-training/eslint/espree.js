var espree = require("espree");
fs = require('fs')

fs.readFile('./sample.js', 'utf8', function(err, data){
  console.log(espree.parse(data);)
});

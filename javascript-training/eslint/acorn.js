var acorn = require('acorn');
var fs = require('fs');

var target = './node_modules/espree/espree.js'

fs.readFile(target, 'utf8', function(err, data){
  if (err) throw err;
  console.log(acorn.parse(data));
});

var acorn = require('acorn');
var fs = require('fs');

var target = process.argv[2]

if (target) {

  fs.readFile(target, 'utf8', function(err, data){
    if (err) throw err;
    console.log(acorn.parse(data));
  });

}

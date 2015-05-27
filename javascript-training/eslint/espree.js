var espree = require("espree");
var fs = require('fs');

var target = './node_modules/espree/espree.js'

fs.readFile(target, 'utf8', function(err, data){
  if (err) throw err;
  console.log(espree.parse(data, {

    // attach range information to each node
    range: true,

    //　行数とカラム情報追加
    loc: true,

    // create a top-level comments array containing all comments
    comments: true,

  }));
});

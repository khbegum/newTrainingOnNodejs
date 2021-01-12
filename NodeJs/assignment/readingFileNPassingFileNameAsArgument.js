var fs=require('fs');
const { dirname } = require('path');
//synchronous it goes step by step
process.argv.splice(0, 2);
var read=fs.readFileSync('./assignment/'+process.argv.join(' '),'utf-8');
console.log(read)



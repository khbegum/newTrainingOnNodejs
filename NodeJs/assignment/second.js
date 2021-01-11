var fs=require('fs');
const { dirname } = require('path');
//synchronous it goes step by step
var read=fs.readFileSync('C:/Users/khbegum/Documents/NodeJs/assignment/text.txt','utf-8');
console.log(read)
var ls=fs.readdirSync(__dirname);
console.log(ls)

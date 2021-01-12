// to write a data into a file and read that file content
var fs=require('fs');
fs.writeFileSync('./assignment/check.txt',"hey dude,let's go..");
var data=fs.readFileSync('./assignment/check.txt','utf8');
console.log(data)
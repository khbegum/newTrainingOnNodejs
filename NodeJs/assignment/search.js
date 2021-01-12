var fs=require('fs');
var data=fs.readFileSync('./assignment/search.txt','utf-8')
console.log(data.length)
console.log(data.split(' '))
var splited=data.split(' ')
console.log(splited.length)
var match=splited.filter((split)=>{
    console.log(split)
    let count =0;
if(split=="john"){

return split;
}
}
);
console.log(match.length)
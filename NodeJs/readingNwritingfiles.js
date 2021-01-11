var fs=require('fs');
//synchronous it goes step by step
var read=fs.readFileSync('read.txt','utf-8');
console.log(read)
fs.writeFileSync('write.txt',read)
//asynchronous
fs.readFile('read.txt','utf-8',function(err,data){
    fs.writeFile('writesec.txt',data,function(err, result) {
        if(err) console.log('error', err);
      })
})


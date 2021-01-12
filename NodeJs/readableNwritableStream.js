var fs=require('fs')
var readStream=fs.createReadStream('./readStream.txt','utf8');
var writeStream=fs.createWriteStream('./writeStream.txt')
readStream.on('data',function(chunk){
    console.log('new chunk recieved: ')
   writeStream.write(chunk)
})
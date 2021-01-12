//it works as stream but rather than using stream.on we use directly pipe method
var fs=require('fs')
var readStream=fs.createReadStream('./readStream.txt','utf8');
var writeStream=fs.createWriteStream('./writeStream.txt')
readStream.pipe(writeStream)
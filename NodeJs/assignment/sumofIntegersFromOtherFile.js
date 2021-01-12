var fs=require('fs')
var sum=fs.createReadStream('./assignment/number.txt','utf8');
sum.on('data',function(chunk){
    console.log('sum of integers is : '+chunk.length)
   
})
 
        


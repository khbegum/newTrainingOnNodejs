var fs=require('fs');
fs.writeFileSync('./assignment/write.txt',"hey let's go",(err,data)=>{
    if(err)
    console.log(err)
})
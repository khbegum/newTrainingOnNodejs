var fs=require('fs')
// fs.unlink('write.txt',(err,result)=>{
//     if(err)
//     console.log(err)
// })
//synchronous
// fs.mkdirSync('read') //create
// fs.rmdirSync('read') //remove
//Asynchronous
fs.mkdir('data',()=>{
    fs.readFile('read.txt','utf8',(err,data)=>{
        fs.writeFile('./data/write.txt',data,(err,data)=>{
            if(err)
            console.log(err)
        })
    })
})
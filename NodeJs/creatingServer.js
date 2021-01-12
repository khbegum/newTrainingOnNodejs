var http= require('http');
var fs=require('fs')
var server=http.createServer(function(req,res){
    console.log("requested URL:"+req.url)
    res.writeHead(200,{'Content-Type':'text/json'});
   // res.end('hey ninjas');
  // var readStream=fs.createReadStream('./readStream.txt','utf8');
// var readStream=fs.createReadStream('./index.html','utf8');

//readStream.pipe(res) 
var myObj={
    'name':'khairunnisa',
    'position':'sr.analyst'
}
res.end(JSON.stringify(myObj))
})
server.listen(3000,'127.0.0.1');
console.log('listening to aport 3000')
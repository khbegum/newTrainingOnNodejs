var express=require('express');
var app=express();
app.get('/:age',(req,res)=>{
    let bornYear=((new Date).getFullYear())-req.params.age;
res.send("your born year is :"+bornYear)
})
app.listen(3005)
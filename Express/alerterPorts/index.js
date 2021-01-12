var express= require('express');
var moment=require('moment')
var app=express();
app.get('/',(req,res)=>{
    res.send("hello world")

})
app.get('/time',(req,res)=>{
    res.send("current time and date is: "+moment(new Date()).toISOString())

})
const PORT=process.env.PORT||8080
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
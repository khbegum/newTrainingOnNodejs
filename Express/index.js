var express= require('express');
var app=express();
app.get('/',(req,res)=>{
    res.send("hello world")

})
const PORT=process.env.PORT||8080
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
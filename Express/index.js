const express = require('express');
const app = express();
const Port = 3000;

app.get('/',(req,res)=>{
   res.send("hello World!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
});
app.get('/about',(req,res)=>{
   res.send("hello about!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
});




app.use((req,res,next)=>
{
    console.log(`${req.method} ${req.path}`);
    next();
})


app.listen(Port,()=>{
    console.log(`server in running ${Port}`)
});
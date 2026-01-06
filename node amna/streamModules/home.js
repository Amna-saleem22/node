const fs = require("fs");
const http = require("http");

const server = http.Server((res,req)=>{
    const Data = fs.createReadStream("input.txt");

   Data.on("hello",(chunk)=>{
    res.write(chunk)
   });
    Data.on("end",(chunk)=>{
    res.end()
   });

   Data.on("error",(err)=>{
    console.log(`error${err.message}`)
    res.end("error hai")
   });
});

server.listen(3000,()=>{
    console.log(`${3000}`)
});

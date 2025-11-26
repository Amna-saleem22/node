// const index = require('./index');
// const num1= 77
// const num3= 88
  
// console.log(`${index.sum(num1,num3)}`)
// console.log(`${index.multi(num1,num3)}`)
// console.log(`${index.divs(num1,num3)}`)
// console.log(`${index.mins(num1,num3)}`)

const fs = require("fs")

fs.writeFile("info.txt" , "hello world " , (err) =>
{
    if(err){
        console.error("error",err)
    } else{console.log("file create")}
})

fs.appendFile("info.txt","hello info file ",(err)=>{
    if(err){
        console.error("kai error hai:",err)
    } else{console.log("kam update ho gaye hai!!")}
})
// fs.unlink("info.txt",(err) =>{
//     if(err){
//         console.error("error hai", err)
//     }else{console.log("delete ho gaye !!!")}
// })
fs.readFile("info.txt", 'utf8' ,(err,data)=>{
    if(err){
        console.error("read file",err)
    }else{
        console.log("read how !!1", data)
    }
})
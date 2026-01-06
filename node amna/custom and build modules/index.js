// console.log("Hello World");
// const sum1 = 78;
// const sum2 = 55;
// const total = sum1+sum2;
 
// console.log(total)

// function names(name){
//     console.log(`Hello, ${name}!`)
// }

// function sum(a,b){
//      return a+b
//  }
//  function multi(a,b){
//     return a*b
//  }
//   function divs(a,b){
//     return a*b
//  }
//   function mins(a,b){
//     return a*b
//  }
//  module.exports = {
//  sum:sum,
//    multi:multi,
//    mins:mins,
//    divs:divs
// };



const path = require("path")
const os = require("os")
console.log("Free memory",os.freemem())
console.log("Total memory",os.totalmem())
console.log("CPU architecture",os.arch())
console.log("Home directory",os.homedir())
console.log("OS platform",os.platform())



const filePath = "C:\Users\Teachers\Desktop\amna\about.txt";

console.log("Directory Name:", path.dirname(filePath));
console.log("File Name:", path.basename(filePath));
console.log("File Extension:", path.extname(filePath));
console.log("Absolute Path:", path.resolve(filePath));





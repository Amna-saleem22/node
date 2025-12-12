const express = require('express');
const app = express();
const Port = 3000;

app.use((req,res,next)=>{
    console.log(`${req.method} ,${req.path}`);
    next();
});
app.get('/',(req,res)=>{
    res.send("Task")
})


 function checkAuth(req,res,next){
// const id = parseInt(req.params.id);
// if(id == "12345" ){
//   return res.status(401).json({ success: false, error: 'Unauthorized access   ' });
// }
// next();



 const key = req.query.key;

    if (key !== "12345") {
        return res.status(401).json({
            success: false,
            message: "Unauthorized access"
        });
    }

   
    next();
 }


  app.get('/secure' , checkAuth,(req,res,next) =>{
                //    const userid = parseInt(req.params.id);
                //    if(userid == 1234){
                //     const err = new error("  ye galat hai!!!!!!!!!!");
                //     err.status(404);
                //     next(err);
                //    }    
                //  res.json({userid: id , name: "Welcome to the secure area!!!!!!!!!!!!!!!!!!"})
                    res.send("Welcome to the secure area!");
  })
  


// // middleware/checkAuth.js
// function checkAuth(req, res, next) {
//     const key = req.query.key;

//     if (key !== "12345") {
//         return res.status(401).json({
//             success: false,
//             message: "Unauthorized access"
//         });
//     }

    // Key is correct → allow request through
//     next();
// }

//module.exports = checkAuth;

// // server.js
// const express = require('express');
// const checkAuth = require('./middleware/checkAuth');

// const app = express();

// // Protected route
// app.get('/secure', checkAuth, (req, res) => {
//     res.send("Welcome to the secure area!");
// });



app.listen(Port,()=>{
 console.log( ` this is your port ${Port}`);
});
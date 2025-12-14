const express = require('express');
const app = express();

const requestTimeLogger = (req, res, next) => {
    const currentTime = new Date().toLocaleString();
    req.requestTime = currentTime;
    console.log("Request received at:", currentTime);
    next();
};

app.get('/time', requestTimeLogger, (req, res) => {
    res.send(`Current request received at: ${req.requestTime}`);
});




function checkAuth(req,res,next){
    const id = req.query.id;
    if(id !== 12345){
          next();
       }
    else{ return res.status(404).json({
            success: false , error:"Unauthorized access"
        });
    }
  
}

app.get('/secure' , checkAuth,(req,res)=>{
  
    res.send("welcome to the secure area!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
   
})


















app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

const express = require('express');
const app = express();
const Port = 3000;
const fs = require('fs');

app.use(express.json());

app.get('/api/user',(req,res)=>{
    const users = JSON.parse(fs.readFileSync('data.json'));
    res.json(users)
})


app.post('/api/post',(req,res)=>{
  const post = JSON.parse(fs.readFileSync('data.json'));
 //const id = Number(req.params.id);

   const newpost = {
    id : post.length +1,
    name : req.body.name
   }
   post.push(newpost)
   fs.writeFileSync('data.json',JSON.stringify(post,null,2))
   res.send(newpost)
   
})

app.put('/api/put/:id' ,(req,res)=>{
  const put = JSON.parse(fs.readFileSync('data.json'))
  const id = Number(req.params.id)
  
  const newput = put.findIndex(e => e.id === id);
  put[newput].name = req.body.name;
   fs.writeFileSync("data.json",JSON.stringify(put,null,2))
   res.send(put[newput])
})



app.delete('/api/delete/:id',(req,res)=>{
  const del = JSON.parse(fs.readFileSync("data.json"))
  const id = Number(req.params.id)

  const deluser = del.findIndex(e=>e.id === id)

  const dele = del.splice(deluser,1);

  fs.writeFileSync('data.json',JSON.stringify(del , null,2))
  res.json({ message: "user deleted", user: dele[0] });
})
// let users = [
//   { id: 1, name: 'John Doe', email: 'john@example.com' },
//   { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
// ];

// // GET - Retrieve all users
// app.get('/api/users', (req, res) => {
//   res.json(users);
// });




app.listen(Port, () => {
  console.log(`Server running on http://localhost:${Port}`);
});
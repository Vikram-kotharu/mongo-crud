let users = {}
const express = require('express');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes')
const app1 = express();
const mongoose = require('mongoose')
app1.use(express.json())

app1.use("/food",userRoutes);

// app1.get('/user',(req,res)=>{
//     res.send(users)
// });

// app1.post('/user',(req,res)=>{
//     users = req.body;
//     res.json({
//         users:req.body
//     })

// })
// //update user

// app1.patch('/user',(req,res)=>{
//     let data = req.body;
//     for(let key in data){
//         users[key] = data[key];
//     }
//     res.json({
//         msg:'updated successfully!'
//     })
// })
// //delete 

// app1.delete('/user',(req,res)=>{
//     users = {}
//     res.json({
//         msg:"users deleted successfully!"
//     })
// })
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app1.listen(process.env.PORT,()=>{
        console.log('im running here!')
    })

    

}).catch((err)=>{
    console.log(err)
})

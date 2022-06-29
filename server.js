require("dotenv").config();
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    
    res.json([{
        'name':'vikram',
        'email':'vikram@gmail.com',
    }])
})

app.get('/about',(req,res)=>{
    res.send('this is about page')
})

app.listen(process.env.PORT,()=>{
    console.log('server running on 4000')
})
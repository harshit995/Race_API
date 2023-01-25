const express=require('express')
const app=express();
require("./src/db/conn")

const PORT=process.env.PORT ||3000;

app.get('/',async( req,res)=>{
res.send("hello..")
})

app.listen(PORT,()=>{
    console.log(`connection successfull on ${PORT}`);
})
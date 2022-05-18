const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}))
app.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html")
})

app.post("/",function(req,res){
    console.log(req.body)
res.send("<h1>Thanks for posting</h1>")
})

// app.listen(3000,function(){
//     console.log("server begins here")
// })
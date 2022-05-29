const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const request = require("request")
const https = require("https");
app.use(express.static("public"));



app.use(bodyParser.urlencoded({extended: true}))
app.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html")
})

app.post("/",function(req,res){
 const name = req.body.name
 const email = req.body.email
 const message = req.body.message

 const data = {
     members : [
        {
            email_address:email,
            status:"subscribed",
            merge_fields:{
            FNAME:name,
            LNAME:message
                
            }
        } 
     ]
 };

 const jsonData = JSON.stringify(data)
const url = "https://us8.api.mailchip.com/3.0/lists/83f1c1205d"
 
const options = {
    method:"GET",
    auth:"Avnam:c0414570f10bef92d1b94484ab54e032-us8"
}

const request = https.request(url,options,function(response){
    response.on("data",function(data){
        console.log(JSON.parse(data));

        
    })
 });

request.write(jsonData);
request.end()
})

app.listen(3000,function(){
    console.log("server begins here")
})


//c0414570f10bef92d1b94484ab54e032-us8 - API key
//83f1c1205d - unique id
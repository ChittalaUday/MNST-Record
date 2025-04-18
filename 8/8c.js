var express = require('express');
var cookiesparser = require('cookie-parser');
var app = express();
app.use(cookiesparser());

app.get('/',(req,res)=>{
    res.cookie('cse','Sai');
    res.cookie('iot','Nikhil',{maxAge:10*1000});
    res.send("Cokkie created");
});

app.listen(5000,()=>{
    console.log("Server running...!");
    //    console.log("Developed by 22MH1A0536");
    console.log("Developed by 23MH5A0505");
});
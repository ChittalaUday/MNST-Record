var express =require('express');
var session = require('express-session');
var app = express();

app.use(session(
    {
        secret:'siva',
        resave:false,
        saveUninitialized:false
    }
));

app.get('/home',(req,res)=>{
    req.session.sessionID = '22MH1A0520'
    res.send("your session id is "+req.session.sessionID);
});

let count=0;
app.get('/count',(req,res)=>{
    if(req.session.count){
        req.session.count++;
        res.send("you visited this site "+req.session.count+" times");
    }
    else{
        req.session.count=1;
        res.send("You visiting this site first time");
    }
});

app.listen(5000,()=>{
    console.log("Server running...!");
})
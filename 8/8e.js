var express = require('express');
var mongoose = require('mongoose');
var fileupload = require('express-fileupload');
var pug = require('pug');
var bcrypt = require('bcrypt');
var path = require('path');
var helmet = require('helmet');
var fs = require('fs');
var app = express();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(fileupload());

let S =mongoose.connect('mongodb://127.0.0.1:27017/8e');

let eSchema = new mongoose.Schema({
    name:String,
    ms:Number,
    ml:Number,
    cns:Number,
    cd:Number,
    mc:Number
});

let emodel = new mongoose.model("eighte",eSchema);

app.get('/',(req,res)=>{
    res.sendFile(__dirname+ "/public/home.html");
});

app.post('/register',async(req,res)=>{
    var {name,ms,ml,cns,cd,mc} = req.body;
    var data ={
        name:name,ms:ms,ml:ml,cns:cns,cd:cd,mc:mc
    }
    const K = new emodel(data);
    await K.save().then(()=>{
        res.send("Uploaded successfully");
    })
});

let cesschema = new mongoose.Schema({
    name:String,
    password:String
});
let csemodel = new mongoose.model("logins",cesschema);

let cseschema1 = new mongoose.Schema({
    name:String,
    password:String,
    file:String
});
let csemodel1 = new mongoose.model("profile",cseschema1);

app.post('/regi',async(req,res)=>{
    var {name,password} = req.body;
    var hpass =await bcrypt.hash(password,5);
    var gaa ={name:name,password:hpass}
    const m =new csemodel1(gaa);
    await m.save().then(()=>{
        res.sendFile(__dirname+ "/public/login.html");
    });
    let imagefile = req.files.file;
    uploadpath= __dirname+ '/public/images'+imagefile.name;
    imagefile.mv(uploadpath,(err)=>{
        if(err){
            res.send(err);
        }
        fs.rename(uploadpath,__dirname+'/public/images/'+req.body.name+".png",(err)=>{
            console.log("Not Done");
         });
    });
});

app.get('/home',(req,res)=>{
    res.sendFile(__dirname+ "/public/register.html");
});

app.post('/check', async (req, res) => {
    const user = await csemodel1.findOne({ name: req.body.name });
    if (user && await bcrypt.compare(req.body.password, user.password)) {
        const marks = await emodel.findOne({ name: req.body.name });
        if (marks) {
            const pic = "/images/"+req.body.name+".png"
            res.render('sample.pug', {pic, data1: marks ,});
        } else {
            res.sendFile(__dirname + '/public/login.html');
        }
    } else {
        res.sendFile(__dirname + '/public/login.html');
    }
});

app.listen(5000,()=>{
    console.log("Server running...!");
});
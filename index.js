const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const helmet = require('helmet');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

mongoose.connect('mongodb://127.0.0.1:27017/8e', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected')).catch(err => console.log('MongoDB Connection Failed', err));

const marksSchema = new mongoose.Schema({
    name: String,
    ms: Number,
    ml: Number,
    cns: Number,
    cd: Number,
    mc: Number
});

const userSchema = new mongoose.Schema({
    name: String,
    password: String
});

const userProfileSchema = new mongoose.Schema({
    name: String,
    password: String,
    file: String
});

const MarksModel = mongoose.model("Marks", marksSchema);
const UserModel = mongoose.model("User", userSchema);
const ProfileModel = mongoose.model("Profile", userProfileSchema);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/home.html");
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + "/public/register.html");
});

app.post('/register', async (req, res) => {
    const { name, ms, ml, cns, cd, mc } = req.body;
    const newEntry = new MarksModel({ name, ms, ml, cns, cd, mc });
    await newEntry.save();
    res.send("Marks registered successfully");
});

app.post('/regi', async (req, res) => {
    const { name, password } = req.body;
    const hashedPass = await bcrypt.hash(password, 5);
    const profileData = { name, password: hashedPass };

    let fileName = '';
    if (req.files && req.files.file) {
        const file = req.files.file;
        const uploadPath = path.join(__dirname, 'public/images/', name + path.extname(file.name));
        file.mv(uploadPath, err => {
            if (err) return console.error('File upload error:', err);
        });
        fileName = '/images/' + name + path.extname(file.name);
    }

    const profile = new ProfileModel({ ...profileData, file: fileName });
    await profile.save();
    res.sendFile(__dirname + "/public/login.html");
});

app.post('/check', async (req, res) => {
    const user = await ProfileModel.findOne({ name: req.body.luser });
    if (user && await bcrypt.compare(req.body.lpass, user.password)) {
        const marks = await MarksModel.findOne({ name: req.body.luser });
        if (marks) {
            const imagePath = user.file || '/images/default.jpg';
            res.render('sample.pug', { image: imagePath, data1: marks });
        } else {
            res.sendFile(__dirname + '/public/login.html');
        }
    } else {
        res.sendFile(__dirname + '/public/login.html');
    }
});

app.listen(5000, () => {
    console.log("Server running...!");
});

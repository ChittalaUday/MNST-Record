const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const logDirectory = path.join(__dirname, 'logs');
const accessLogStream = fs.createWriteStream(path.join(logDirectory, 'access.log'), { flags: 'a' });

//Middleware 
app.use(morgan('dev')); 
app.use(morgan('combined', { stream: accessLogStream })); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


app.use((req, res, next) => {
  console.log(`[LOGS] ${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
});

const notes = [];

app.post('/notes', (req, res, next) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      error: 'Title and content are required!'
    });
  }

  const newNote = { title, content };
  notes.push(newNote);

  res.status(201).json({
    message: 'Note created successfully!'
  });
});

app.get('/notes', (req, res) => {
  res.json(notes);
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log("Developed by 23MH5A0505");
  console.log(`Server is running on port ${PORT}`);
});

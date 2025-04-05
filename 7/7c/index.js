const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

app.use(express.json()); // Middleware to parse JSON

var success = false;
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/recorddb')
.then(() => {success= true;console.log('Connected to MongoDB');})
.catch(err => console.log('Connection error:', err));

app.get ('/', (req, res) => {
  if (!success) {
    res.status(500).send('Failed to connect to MongoDB!');
  }else{
    res.send('Welcome to the MongoDB connected server!');
  }
    
});

app.listen(PORT, () => {
  console.log("Developed by 23MH5A0505");
  console.log(`\nServer is running on http://localhost:${PORT}`);
});

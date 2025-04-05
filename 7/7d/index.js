const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

app.use(express.json()); // Middleware to parse JSON

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/recorddb')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('Connection error:', err));

const userSchema = new mongoose.Schema({
  name: String,
  password: String
});

const UserModel = mongoose.model('Users', userSchema);

app.post('/users', async (req, res) => {
  try {
    if (!req.body.name || !req.body.password) {
      return res.status(400).json({ error: 'Name and password are required' });
    }
    const user = new UserModel({
        name: req.body.name,
        password: req.body.password
    });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log("Developed by 23MH5A0505");
  console.log(`Server is running on http://localhost:${PORT}`);
});

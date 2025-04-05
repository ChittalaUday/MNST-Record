const express =require('express');
const app=express();
const fs = require('fs');
fs.writeFile('src.txt', 'Mongo, Express, Angular, Node', (err) => {
  if (err) throw err;
  console.log('File created and data written!');
});

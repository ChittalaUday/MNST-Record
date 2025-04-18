const express =require('express');
const app=express();
const fs = require('fs');
fs.writeFile('src.txt', 'Mongo, Express, Angular, Node', (err) => {
  if (err) throw err;
  console.log('File created and data written!');
  console.log("Designed by 22MH1A0536");
  // console.log("Designed by 23MH5A0505");
});

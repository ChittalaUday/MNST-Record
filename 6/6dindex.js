const express = require('express');
const http = require('http');
const fs = require('fs');
const path = require('path');
const app = express();

const port = 3000;
const hostname = 'localhost';

const startTime = new Date().toLocaleString(); 
const restartFile = path.join(__dirname, 'restart-time.txt');

let lastRestartTime = 'No previous restart recorded';
if (fs.existsSync(restartFile)) {
  lastRestartTime = fs.readFileSync(restartFile, 'utf8');
}

fs.writeFileSync(restartFile, startTime);

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/time.html') {
    const filePath = path.join(__dirname, 'public', 'time.html');

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading page');
      } else {
        let html = data
          .replace('{{START_TIME}}', startTime)
          .replace('{{RESTART_TIME}}', lastRestartTime);

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
      }
    });
  } else {
    res.writeHead(404);
    res.end('404 - Page Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`✅ Server running at http://${hostname}:${port}/`);
  console.log(`⏰ Started at: ${startTime}`);
  console.log(`🔁 Previous restart was at: ${lastRestartTime}`);
  console.log("Designed by 22MH1A0536");
  // console.log("Designed by 23MH5A0505");
});

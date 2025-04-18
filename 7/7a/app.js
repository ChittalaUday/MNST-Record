const express = require('express');
const app = express();
const route = require('./routes/route');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', route);

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Developed by 22MH1A0536");
  // console.log("Developed by 23MH5A0505");

  console.log(`Server running on port ${PORT}`);
});

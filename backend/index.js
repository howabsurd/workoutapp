const express = require("express");

//middleware

const app = express();

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`listening on Port ${PORT}!!!`);
});

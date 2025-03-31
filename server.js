const express = require("express");
const app = express();

//ROUTES
app.get("/", (req, res) => {
  res.send("Hello node api");
});

app.listen(3003, () => {
  console.log(`App is running on port 3003`);
});

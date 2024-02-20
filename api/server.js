const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb://localhost/myapp")
  .then(() => {
    console.log("Connected to MongoDB", ">>>>>>>>>>>>>>>>");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });

// Middleware
app.use(express.json());

app.get("/saif", (req, res) => {
  return res.json({ message: "Saif Rocks" });
});

// Routes
// Define your routes here

const port = 3060;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

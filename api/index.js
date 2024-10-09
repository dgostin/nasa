const express = require("express");
const path = require("path");
require("dotenv").config();
var fs = require("fs");
var files = fs.readdirSync(path.join(__dirname, "../client/dist"));

const app = express();

// Serve static files from the React app
// app.use(express.static(path.join(__dirname, "../client/dist")));

console.log(files);

// API route (example)
app.get("/api/hello", (req, res) => {
  res.json({ message: path.join(__dirname, "../client/dist") });
});

// Catch-all route to serve the React app for any non-API request
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

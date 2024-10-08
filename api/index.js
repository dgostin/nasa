const express = require("express");
const path = require("path");
const axios = require("axios"); // Import axios

require("dotenv").config();
// var fs = require("fs");
// var files = fs.readdirSync(path.join(__dirname, "../client"));

const app = express();

// Serve static files from the React app
// app.use(express.static(path.join(__dirname, "../client/dist")));

// API route (example)
app.get("/api/hello", (req, res) => {
  res.json({ message: "Go away." });
});

app.get("/api/data", async (req, res) => {
  const date = req.query.date;
  const hdimage = req.query.hdimage;
  // console.log(date);
  const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=${date}`;
  console.log(url);
  try {
    const response = await axios.get(url);
    const data = response.data;

    if (hdimage) {
      console.log(data.hdurl);
      const response1 = await axios.get(data.hdurl, { responseType: "stream" });
      res.setHeader(
        "Content-Disposition",
        'attachment; filename="' + data.title + '.jpg"'
      ); // Custom file name
      response1.data.pipe(res);
    } else {
      res.json(data);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
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

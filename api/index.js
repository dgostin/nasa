const express = require("express");
const path = require("path");
const axios = require("axios"); // Import axios
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();

// Apply the rate limit to all requests
app.use(
  rateLimit({
    windowMs: 60 * 1000, // 60 seconds
    max: 15, // Limit each IP to 15 requests per `window`
    message:
      "Too many requests from this IP, please try again after 60 seconds",
  })
);

// Serve static files from the React app
// app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.static(path.join(__dirname, "../public")));

// API route
app.get("/api/data", async (req, res) => {
  const date = req.query.date;
  const hdimage = req.query.hdimage;
  // console.log(date);
  const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=${date}`;
  // console.log(url);
  try {
    const response = await axios.get(url);
    const data = response.data;

    if (hdimage) {
      // console.log(data.hdurl);
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

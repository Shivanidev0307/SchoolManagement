const mongoose = require("mongoose");
const express = require('express');
const server = express();
const app = require("./app");
require("dotenv").config();

const { dataconnection } = require("./Config/config");

// MongoDB Connection
mongoose.connect(process.env.moongoseAtlasurl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.error("MongoDB connection error:", err);
});

// Express Server Setup
server.use(express.json());

server.listen(process.env.port, async () => {
  try {
    await dataconnection; // Assuming this is your database connection setup
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Database connection failed:", err);
  }

  console.log(`Server is running on port ${process.env.port}`);
});

// Attach your Express app here
server.use(app);

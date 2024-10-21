import express from "express";
import "dotenv/config";
import { db } from "./configs/db.js";

const app = express(); // library express initialized

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World",
  });
});

// route / path
app.use("*", (req, res) => {
  res.status(404).json({
    message: "not found",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started, listening on port ${PORT}`);
});

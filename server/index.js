import express from "express";

const app = express();
const PORT = 5000;

app.use("/", (req, res) => {
  res.status(200).json({
    message: "Hello World",
  });
});

app.use("*", (req, res) => {
  res.status(404).json({
    message: "not found",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started, listening on port ${PORT}`);
});

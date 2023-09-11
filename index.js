const express = require("express");
const cors = require("cors");
const todoRoutes = require("./todoRoutes");

const server = express();

const corsOptions = {
  origin: "http://localhost:4100",
  methods: ["GET", "POST"],
};

server.use(cors(corsOptions)); // Use the cors middleware with your options

server.listen(4100);

server.use("/api/todos/", todoRoutes.router);

server.get("/", (req, res) => {
  res.send("Welcome to Utility api");
});

console.log("Server is listening at 4100");

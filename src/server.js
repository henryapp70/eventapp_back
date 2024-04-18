const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());

// Establecer el encabezado Access-Control-Allow-Origin
server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

server.use(cors());
server.use(router);

module.exports = server;

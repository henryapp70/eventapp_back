const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const server = express();

server.use(morgan("dev"));
server.use(express.json());

// Configurar CORS para permitir solicitudes desde tu dominio front-end
const allowedOrigins = ["https://events-app-eta-ruddy.vercel.app/"];
server.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = "La política de CORS impide el acceso desde este origen";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

server.use(router);

module.exports = server;

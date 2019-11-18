const express = require("express");
const helmet = require("helmet");

const car_Router = require("../cars/carsRouter.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/cars", car_Router);

module.exports = server;

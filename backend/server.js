// MAIN SERVER APPLICATION ENTRY POINT _________________

const express = require("express");
const createError = require("http-errors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const indexRouter = require("./routes/index.js");

const server = express();

// CONNECT TO DATABASE
mongoose.connect("mongodb://localhost:27017/contactBookDataBase", {});
mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());

// MOUNT ROUTE
server.use("/", indexRouter); // ---"/contacts" instead correct?!?!

// CATCH 404 & SEND TO ERROR HANDLER
server.use(function (req, res, next) {
  next(createError(404));
});

// ERROR HANDLER
server.use(function (error, req, res) {
  res.status(error.status || 500);
  res.json({
    message: error.message,
    error: req.server.get("env") === "development" ? error : {},
  });
});

module.exports = server;

require("dotenv").config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var contactRouter = require("./routes/contact");

//Additional 

const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");



var app = express();
console.log("Loaded FROM_EMAIL:", process.env.FROM_EMAIL);
//Middleware: Security headers, JSON parsing, CORS, and rate limiting
app.use(helmet());
app.use(express.json({ limit: "200kb" }));
app.use(cors()); // TODO: restrict origins later
app.use("/contact", rateLimit({ windowMs: 60 * 1000, max: 5 }));



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/contact", contactRouter);

module.exports = app;

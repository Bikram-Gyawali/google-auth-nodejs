const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
var app = express();
const PORT = process.env.PORT || 3000;
dotenv.config({ path: "./config/config.env" });

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
});

require("./config/passport")(passport);

app.use(express.urlencoded({ extended: true }));
// app.engine('html', require('ejs').renderFile);
app.set("view engine", "ejs");
app.use(express.static("public"));
// initialze middleware
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret:
      "oehoes this is my secreet hai ta bro timi haru ko k secret xa sh@re with mee teu ok",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

// immporting routes
app.use(require("./routes/index"));
app.use("/auth", require("./routes/auth"));
app.use(require("./routes/todo"));

app.listen(PORT, console.log(`listening at ${PORT}`));

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 7000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var MONGODB_URI = process.env.MONGODB_URL || "mongodb://user:password1@ds261838.mlab.com:61838/heroku_b03j7rr3";

mongoose.connect(MONGODB_URI, { useNewUrlParser : true, useFindAndModify: false });


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });

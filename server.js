const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 7000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/workouts")(app);
require("./routes/htmlRoutes")(app);

var MONGODB_URI = process.env.MONGODB_URL || "mongodb://localhost/fitness_trackerdb";

mongoose.connect(MONGODB_URI, { useNewUrlParser : true });


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });

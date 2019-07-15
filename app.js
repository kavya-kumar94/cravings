const Food = require("./models/Food");
const seed = require('./seeder');
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI
const users = require("./routes/api/users");
const foods = require("./routes/api/foods");
const drinks = require("./routes/api/drinks");
// const User = require("./models/User");
const bodyParser = require('body-parser');
// const https = require('https');
// const mongo = require('mongodb').MongoClient;

mongoose
    .connect(db, { useNewUrlParser: true } )
    .then(() => console.log("Connected to mongoDB"))
    .catch(err => console.log(err));

app.use(bodyParser.json());

seed();

app.use("/api/users", users)
app.use("/api/foods", foods)
app.use("/api/drinks", drinks)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI
const users = require("./routes/api/users");
const restaurants = require("./routes/api/restaurants");

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to mongoDB"))
    .catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("Hello Sophia");
});

app.use("/api/users", users)
app.use("/api/restaurants", restaurants)

const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`Listening on port ${port}`)});
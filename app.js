const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI
const users = require("./routes/api/users");
const foods = require("./routes/api/foods");
const drinks = require("./routes/api/drinks");
const User = require("./models/User");
const bodyParser = require('body-parser');

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to mongoDB"))
    .catch(err => console.log(err));


app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.get("/", (req, res) => {
    const user = new User({
        username: "jim",
        age: 20,
        password: "jimisgreat123"
    })
    user.save()
    res.send("Hello Sophia");
});

app.use("/api/users", users)
app.use("/api/foods", foods)
app.use("/api/drinks", drinks)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
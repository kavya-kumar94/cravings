// const seed = require('./seeder');
const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const foods = require("./routes/api/foods");
const drinks = require("./routes/api/drinks");
const rooms = require("./routes/api/rooms");
const bodyParser = require("body-parser");
const foodsaves = require("./routes/api/foodsaves");
const drinksaves = require("./routes/api/drinksaves");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch(err => console.log(err));

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

var server = app.listen(process.env.PORT || 5000);
// var io = require('socket.io').listen(server);

// io.on('connection', socket => {
//     console.log('user connected');

//     socket.on('disconnect', function () {
//         console.log('user disconnected');
//     });

//     // socket.on('chat', ({msg}) => {
//     //     io.emit(msg);
//     //     console.log(msg);
//     // })
//     socket.on('multiuser', (room) => {
//         console.log(room);
//         // io.emit(msg);
//     })
// });

// seed();

app.use("/api/users", users);
app.use("/api/foods", foods);
app.use("/api/drinks", drinks);
app.use("/api/rooms", rooms);
app.use("/api/foodsaves", foodsaves);
app.use("/api/drinksaves", drinksaves);

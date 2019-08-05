// const seed = require('./seeder');
const path = require('path');
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI
const users = require("./routes/api/users");
const foods = require("./routes/api/foods");
const drinks = require("./routes/api/drinks");
const bodyParser = require('body-parser');

mongoose
    .connect(db, { useNewUrlParser: true } )
    .then(() => console.log("Connected to mongoDB"))
    .catch(err => console.log(err));

app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

var server = app.listen(5000);
var io = require('socket.io').listen(server);

// var http = require('http').Server(app);
// var io = require('socket.io')(http, {});
// const port = process.env.PORT || 5000;

io.on('connection', socket => {
    console.log('user connected');

    socket.on('chat', ({msg}) =>{
        console.log(msg);
    })
});

// seed(); 

app.use("/api/users", users)
app.use("/api/foods", foods)
app.use("/api/drinks", drinks)


// app.listen(port, () => console.log(`Listening on port ${port}`));
const express = require("express");
const router = express.Router();
const Room = require('../../models/Room');

router.post("/",
    (req, res) => {
        const room = new Room({
            name: req.body.name,
            users: [req.body.hostname]
        });
        room.save().then(room => {
            res.json(room);
        })
        .catch(err => res.status(400).json('Invalid room parameters'));
    }
);

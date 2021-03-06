const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Room = require('../../models/Room');

router.get('/:roomId',
    (req, res) => {
        let room = { _id: mongoose.Types.ObjectId(req.params.roomId) }
        Room.findOne(room)
            .then(fetchedRoom => {
                res.json(fetchedRoom);
            })
            .catch(err => res.status(404).json('No room found'));
    }
);

router.post("/",
    (req, res) => {
        const room = new Room({
            name: req.body.roomName,
            users: [req.body.userName]
        });
        room.save().then(room => {
            res.json(room);
        })
        .catch(err => res.status(400).json('Invalid room parameters'));
    }
);

router.delete("/:roomId",
    (req, res) => {
        let room = { _id: mongoose.Types.ObjectId(req.params.roomId) }
        Room.findOne(room)
            .then((fetchedRoom) => {
                Room.deleteOne(fetchedRoom)
                    .then(() => {
                        res.json(fetchedRoom);
                    })
                    .catch(err => res.status(404).json('Room does not exist'));
            }).catch(err => res.status(404).json('Room does not exist'))
});

router.patch('/:roomName',
    (req, res) => {
        let room = { name: req.params.roomName }
        let updateParams = { $push: { users: req.body.userName } }
        Room.findOneAndUpdate(room, updateParams, { new: true })
            .then(updatedRoom => {
                res.json(updatedRoom);
            })
            .catch(err => res.status(400).json('Invalid update parameters'));
});


module.exports = router;

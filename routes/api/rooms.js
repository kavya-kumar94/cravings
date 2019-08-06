const express = require("express");
const router = express.Router();
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
            name: req.body.name,
            users: [req.body.hostname]
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

router.patch('/:roomId',
    (req, res) => {
        let roomId = { _id: mongoose.Types.ObjectId(req.params.roomId) }
        let updateParams = { player2Id: mongoose.Types.ObjectId(req.body.playerId) }
        Room.findOneAndUpdate(roomId, updateParams, { new: true })
            .then(updatedRoom => {
                res.json(updatedRoom);
            })
            .catch(err => res.status(400).json('Invalid update parameters'));
});


module.exports = router;

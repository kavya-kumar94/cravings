const express = require("express");
const router = express.Router();
const Room = require('../../models/Room');

router.post("/",
    (req, res) => {
        const room = new Room({
            player1Id: mongoose.Types.ObjectId(req.body.playerId),
        });
        newMultiplayerGameRoom.save().then(multiplayerGameRoom => {
            // let gameRoomPojo = {
            //     id: multiplayerGameRoom.id,
            //     player1Id: multiplayerGameRoom.player1Id,
            //     player2Id: multiplayerGameRoom.player2Id
            // };
            res.json(gameRoomPojo(multiplayerGameRoom));
        })
            .catch(err => res.status(400).json({ parameters: 'Invalid multiplayerGameRoom parameters' }));
    }
);

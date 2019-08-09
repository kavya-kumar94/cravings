const express = require("express");
const router = express.Router();
const DrinkSave = require('../../models/DrinkSave');
const mongoose = require("mongoose");

router.get('/',
    (req, res) => {
        DrinkSave.find({ userId: mongoose.Types.ObjectId(req.query.userId )})
            // .then(saves => {
            //     res.json(saves);
            // })
            // .catch(err => res.status(404).json('No saves found'));
            .populate('drinkId')
            .exec()
            .then(drinks => {
                res.json(drinks);
            })
    }
);
router.get('/:drinkId',
    (req, res) => {
        DrinkSave.find({
            userId: mongoose.Types.ObjectId(req.query.userId),
            drinkId: mongoose.Types.ObjectId(req.params.drinkId)
        }).then(saves => {
            res.json(saves[0]);
        })
            .catch(err => res.status(404).json("No save found"));
    }
)

router.post("/",
    (req, res) => {
        const drinksave = new DrinkSave({
            userId: req.body.userId,
            drinkId: req.body.drinkId
        });
        drinksave.save().then(drinksave => {
            res.json(drinksave);
        })
            .catch(err => res.status(400).json('Invalid save parameters'));
    }
);

router.delete("/:drinkSaveId",
    (req, res) => {
        let save = { _id: mongoose.Types.ObjectId(req.params.drinkSaveId) }
        DrinkSave.findOne(save)
            .then((fetchedSave) => {
                DrinkSave.deleteOne(fetchedSave)
                    .then(() => {
                        res.json(fetchedSave);
                    })
                    .catch(err => res.status(404).json('Save does not exist'));
            }).catch(err => res.status(404).json('Save does not exist'))
    });

module.exports = router;
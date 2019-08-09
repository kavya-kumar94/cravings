const express = require("express");
const router = express.Router();
const FoodSave = require('../../models/FoodSave');
const mongoose = require("mongoose");

router.get('/',
    (req, res) => {
        FoodSave.find({ userId: mongoose.Types.ObjectId(req.query.userId)})
            // .then(saves => {
            //     res.json(saves);
            // })
            .populate('foodId')
            .exec()
            .then(foods => {
                res.json(foods);
                // console.log('the food is %s', foodsave.food.name);
            })
            // .catch(err => res.status(404).json('No saves found'));
    }
);

router.get('/:foodId',
    (req,res) => {
        FoodSave.find({ 
            userId: mongoose.Types.ObjectId(req.query.userId),
            foodId: mongoose.Types.ObjectId(req.params.foodId)
        }).then(saves => {
            res.json(saves[0]);
        })
        .catch(err => res.status(404).json("No save found"));
    }
)

router.post("/",
    (req, res) => {
        const foodsave = new FoodSave({
            userId: req.body.userId,
            foodId: req.body.foodId
        });
        foodsave.save().then(foodsave => {
            res.json(foodsave);
        })
        .catch(err => res.status(400).json('Invalid save parameters'));
    }
);

router.delete("/:foodSaveId",
    (req, res) => {
        let save = { _id: mongoose.Types.ObjectId(req.params.foodSaveId) }
        FoodSave.findOne(save)
            .then((fetchedSave) => {
                FoodSave.deleteOne(fetchedSave)
                    .then(() => {
                        res.json(fetchedSave);
                    })
                    .catch(err => res.status(404).json('Save does not exist'));
            }).catch(err => res.status(404).json('Save does not exist'))
});

module.exports = router;
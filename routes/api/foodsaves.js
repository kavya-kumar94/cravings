const express = require("express");
const router = express.Router();
const FoodSave = require('../../models/FoodSave');

router.get('/',
    (req, res) => {
        FoodSave.find({ userId: req.body.userId })
            .then(saves => {
                res.json(saves);
            })
            .catch(err => res.status(404).json('No saves found'));
    }
);

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
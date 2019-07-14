const express = require("express");
const router = express.Router();
const Drink = require('../../models/Drink')

router.get("/", (req, res) => {
    Drink.find({
        // location: req.body.location,
        caffeine: req.body.caffeine,
        sweet: req.body.sweet,
        aromatic: req.body.aromatic,
        sparkling: req.body.sparkling,
        hot: req.body.hot,
        iced: req.body.iced,
        healthy: req.body.healthy,
        sad: req.body.sad,
        happy: req.body.happy,
        angry: req.body.angry,
        sick: req.body.sick,
        celebratory: req.body.celebratory,
        stressed: req.body.stressed,
        adventurous: req.body.adventurous,
        price: req.body.price
    })
        .then(drinks => {
            return res.json(drinks);
        })
})

module.exports = router;
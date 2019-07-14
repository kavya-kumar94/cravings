const express = require("express");
const router = express.Router();
const Food = require('../../models/Food')
router.get("/", (req, res) => {
    Food.find({ 
        // location: req.body.location,
        price: req.body.price,
        spicy: req.body.spicy, 
        sweet: req.body.sweet,
        salty: req.body.salty,
        savory: req.body.savory,
        hot: req.body.hot,
        cold: req.body.cold,
        healthy: req.body.healthy,
        junk: req.body.junk,
        happy: req.body.happy,
        sad: req.body.sad,
        angry: req.body.angry,
        sick: req.body.sick,
        celebratory: req.body.celebratory,
        stressed: req.body.stressed,
        adventurous: req.body.adventurous
    })
    .then(foods => {
        return res.json(foods);
    })
})

module.exports = router;
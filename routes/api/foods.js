const express = require("express");
const router = express.Router();
const Food = require('../../models/Food')
router.get("/", (req, res) => {
    Food.find({ 
        // location: req.body.location,
        sweet: req.body.sweet,
        spicy: req.body.spicy, 
        salty: req.body.salty,
        savory: req.body.savory,
        hot: req.body.hot,
        cold: req.body.cold,
        healthy: req.body.healthy,
        junk: req.body.junk,
        sad: req.body.sad,
        happy: req.body.happy,
        hangry: req.body.hangry,
        sick: req.body.sick,
        celebratory: req.body.celebratory,
        stressed: req.body.stressed,
        adventurous: req.body.adventurous,
        price: req.body.price
    })
    .then(foods => {
        return res.json(foods);
    })
})

module.exports = router;
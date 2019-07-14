const express = require("express");
const router = express.Router();
const Food = require('../../models/Food')
router.get("/", (req, res) => {
    Food.find({ 
        spicy: { $eq: req.body.spicy }, 
        sweet: { $eq: req.body.sweet }
    })
    .then(foods => {
        return res.json(foods);
    })
})

module.exports = router;
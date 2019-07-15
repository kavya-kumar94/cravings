const express = require("express");
const router = express.Router();
const Food = require('../../models/Food')

router.get("/", (req, res) => {
    // Food.find({ 
    //     sweet: req.body.sweet,
    //     spicy: req.body.spicy, 
    //     salty: req.body.salty,
    //     savory: req.body.savory,
    //     hot: req.body.hot,
    //     cold: req.body.cold,
    //     healthy: req.body.healthy,
    //     junk: req.body.junk,
    //     sad: req.body.sad,
    //     happy: req.body.happy,
    //     hangry: req.body.hangry,
    //     sick: req.body.sick,
    //     celebratory: req.body.celebratory,
    //     stressed: req.body.stressed,
    //     adventurous: req.body.adventurous,
    //     price: req.body.price
    // })
    Food.find({})
    .then(foods => {
        let foodsPojo = {};
        foods.forEach(food => {
            let foodPojo = {
                id: food.id,
                name: food.name,
                imageUrl: food.imageUrl,
                rating: food.rating,
                lat: food.lat,
                lng: food.lng,
                price: food.price,
                address: food.address,
                city: food.city,
                zipCode: food.zipCode,
                country: food.country,
                state: food.state,
                phone: food.phone
            }
            foodsPojo[food.id] = foodPojo;
        })
        return res.json(foodsPojo);
    })
    .catch(err => console.log(err))
})

module.exports = router;
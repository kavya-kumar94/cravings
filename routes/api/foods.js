const express = require("express");
const router = express.Router();
const Food = require('../../models/Food')

router.get("/", (req, res) => {
    console.log(req)
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
    // Food.find({sick: req.query.sick})
    .then(foods => {
        // console.log(foods.length);
        let foodsPojo = {};
        foods.forEach(food => {
            let foodPojo = {
                id: food._id,
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
                phone: food.phone,
                sweet: food.sweet,
                spicy: food.spicy,
                salty: food.salty,
                savory: food.savory,
                hot: food.hot,
                cold: food.cold,
                healthy: food.healthy,
                junk: food.junk,
                sad: food.sad,
                happy: food.happy,
                hangry: food.hangry,
                sick: food.sick,
                celebratory: food.celebratory,
                stressed: food.stressed,
                adventurous: food.adventurous
            }
            foodsPojo[food._id] = foodPojo;
        })
        // console.log(foods.map(food => {
        //     return food.id
        // }))
        // console.log(Object.keys(foodsPojo))
        // console.log(Object.keys(foodsPojo).length)
        return res.json(foodsPojo);
    })
    .catch(err => 
        res.status(404).json({ noFoodFound: 'No food locations found' }))
})

module.exports = router;
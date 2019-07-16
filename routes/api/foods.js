const express = require("express");
const router = express.Router();
const Food = require('../../models/Food')

router.get("/", (req, res) => {
    // console.log(req.query);
    // console.log(JSON.parse(req.query.sweet));
    // req.query.sweet = JSON.parse(req.query.sweet);
    // console.log(req.query);
    // console.log(typeof req.query.sweet);

    req.query.sweet = JSON.parse(req.query.sweet);
    req.query.spicy = JSON.parse(req.query.spicy);
    req.query.salty = JSON.parse(req.query.salty);
    req.query.savory = JSON.parse(req.query.savory);
    req.query.hot = JSON.parse(req.query.hot);
    req.query.cold = JSON.parse(req.query.cold);
    req.query.healthy = JSON.parse(req.query.healthy);
    req.query.junk = JSON.parse(req.query.junk);
    req.query.sad = JSON.parse(req.query.sad);
    req.query.happy = JSON.parse(req.query.happy);
    req.query.hangry = JSON.parse(req.query.hangry);
    req.query.sick = JSON.parse(req.query.sick);
    req.query.celebratory = JSON.parse(req.query.celebratory);
    req.query.stressed = JSON.parse(req.query.stressed);
    req.query.adventurous = JSON.parse(req.query.adventurous);

    console.log(req.query);
    
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
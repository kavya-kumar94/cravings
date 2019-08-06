const express = require("express");
const router = express.Router();
const Food = require('../../models/Food');

// console.log(req.query)
router.get("/", (req, res) => {

    // console.log('in foods router')

    // console.log(req.query)
    req.query.zipCodes = req.query.zipCodes[0].split(",")
    // console.log(req.query.zipCodes)
    // console.log(req.query)
    
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


    let newQuery = {};
    Object.keys(req.query).forEach(category => {
        if (req.query[category] === true) {
            Object.assign(newQuery, { [category]: req.query[category] })
        }
    })


    if (Object.keys(newQuery).length === 0) return res.json({});

    let result = [];
    Object.keys(newQuery).forEach(key => {
        Food.find({ [key]: true })
            .then(res => {
                result = result.concat(res);
            console.log(result)
            }).then(() => {

                let foodsPojo = {};
                result.forEach(food => {
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
                // console.log(foodsPojo)
                return res.json(foodsPojo);

            })
            .catch(err =>
                res.status(404).json({ noFoodFound: 'No food locations found' }));
    })
})

module.exports = router;





// ///////////////////////////////////

// const express = require("express");
// const router = express.Router();
// const Food = require('../../models/Food')

// router.get("/", (req, res) => {

    // req.query.sweet = JSON.parse(req.query.sweet);
    // req.query.spicy = JSON.parse(req.query.spicy);
    // req.query.salty = JSON.parse(req.query.salty);
    // req.query.savory = JSON.parse(req.query.savory);
    // req.query.hot = JSON.parse(req.query.hot);
    // req.query.cold = JSON.parse(req.query.cold);
    // req.query.healthy = JSON.parse(req.query.healthy);
    // req.query.junk = JSON.parse(req.query.junk);
    // req.query.sad = JSON.parse(req.query.sad);
    // req.query.happy = JSON.parse(req.query.happy);
    // req.query.hangry = JSON.parse(req.query.hangry);
    // req.query.sick = JSON.parse(req.query.sick);
    // req.query.celebratory = JSON.parse(req.query.celebratory);
    // req.query.stressed = JSON.parse(req.query.stressed);
    // req.query.adventurous = JSON.parse(req.query.adventurous);

    
    // Food.find({ 
    //     sweet: req.query.sweet,
    //     spicy: req.query.spicy, 
    //     salty: req.query.salty,
    //     savory: req.query.savory,
    //     hot: req.query.hot,
    //     cold: req.query.cold,
    //     healthy: req.query.healthy,
    //     junk: req.query.junk,
    //     sad: req.query.sad,
    //     happy: req.query.happy,
    //     hangry: req.query.hangry,
    //     sick: req.query.sick,
    //     celebratory: req.query.celebratory,
    //     stressed: req.query.stressed,
    //     adventurous: req.query.adventurous,
    // })

    
    // Food.find({ 
    //     sweet: req.query.sweet,
    //     spicy: req.query.spicy, 
    //     salty: req.query.salty,
    //     savory: req.query.savory,
    //     hot: req.query.hot,
    //     cold: req.query.cold,
    //     healthy: req.query.healthy,
    //     junk: req.query.junk,
    //     sad: req.query.sad,
    //     happy: req.query.happy,
    //     hangry: req.query.hangry,
    //     sick: req.query.sick,
    //     celebratory: req.query.celebratory,
    //     stressed: req.query.stressed,
    //     adventurous: req.query.adventurous,
    // })
    // Food.find({})
    // Food.find({sick: req.query.sick})
    // .then(foods => {
        // console.log(foods.length);
        // let foodsPojo = {};
        // foods.forEach(food => {
        //     let foodPojo = {
        //         id: food._id,
        //         name: food.name,
        //         imageUrl: food.imageUrl,
        //         rating: food.rating,
        //         lat: food.lat,
        //         lng: food.lng,
        //         price: food.price,
        //         address: food.address,
        //         city: food.city,
        //         zipCode: food.zipCode,
        //         country: food.country,
        //         state: food.state,
        //         phone: food.phone,
        //         sweet: food.sweet,
        //         spicy: food.spicy,
        //         salty: food.salty,
        //         savory: food.savory,
        //         hot: food.hot,
        //         cold: food.cold,
        //         healthy: food.healthy,
        //         junk: food.junk,
        //         sad: food.sad,
        //         happy: food.happy,
        //         hangry: food.hangry,
        //         sick: food.sick,
        //         celebratory: food.celebratory,
        //         stressed: food.stressed,
        //         adventurous: food.adventurous
        //     }
        //     foodsPojo[food._id] = foodPojo;
        // })
        // console.log(foods.map(food => {
        //     return food.id
        // }))
        // console.log(Object.keys(foodsPojo))
        // console.log(Object.keys(foodsPojo).length)
//         return res.json(foodsPojo);
//     })
//     .catch(err => 
//         res.status(404).json({ noFoodFound: 'No food locations found' }))
// })

// module.exports = router;
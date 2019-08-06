const express = require("express");
const router = express.Router();
const Food = require('../../models/Food');


router.get("/", (req, res) => {
    if(req.query.zipCodes[0] !== ''){
        req.query.zipCodes = req.query.zipCodes[0].split(",")
    } else {
        req.query.zipCodes = []
    }
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
    let newerQuery = {};
    Object.keys(req.query).forEach(category => {
        if (req.query[category] === true) {
            Object.assign(newQuery, { [category]: req.query[category] })
        } else if(category === "zipCodes") {
            Object.assign(newerQuery, {[category]: req.query[category]})
        }
    })

  

    let result = [];
    let filtered = [];
    
    if (Object.keys(newQuery).length === 0 && Object.keys(newerQuery).length === 0) return res.json({});


    if (Object.keys(newQuery).length === 0){
        Food.find({})
            .then(res => {
                result = result.concat(res);
            }).then(() => {

                result.forEach(food => {
                    let zip = String(food.zipCode)
                    if (newerQuery["zipCodes"].includes(zip)) {
                        filtered = filtered.concat(food)
                    }
                })


                let foodsPojo = {};
                filtered.forEach(food => {
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
                return res.json(foodsPojo);

            })
            .catch(err =>
                res.status(404).json({ noFoodFound: 'No food locations found' }));
    } else {

    
        Object.keys(newQuery).forEach(key => {
            Food.find({ [key]: true })
                .then(res => {
                    result = result.concat(res);    
                }).then(() => {

                    if(newerQuery["zipCodes"].length === 0){
                        filtered = result.slice()
                    } else {
                        result.forEach(food => {
                            let zip = String(food.zipCode)
                            if (newerQuery["zipCodes"].includes(zip)) {
                                filtered = filtered.concat(food)
                            }
                        })
                    }

                    let foodsPojo = {};
                    filtered.forEach(food => {
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
                    return res.json(foodsPojo);

                })
                .catch(err =>
                    res.status(404).json({ noFoodFound: 'No food locations found' }));
        })
    }
})


router.get("/foods/:foodId", (req, res) => {
    
    let result = [];
    let filtered = [];

    if (Object.keys(newQuery).length === 0 && Object.keys(newerQuery).length === 0) return res.json({});


    if (Object.keys(newQuery).length === 0) {
        Food.find({})
            .then(res => {
                result = result.concat(res);
            }).then(() => {

                result.forEach(food => {
                    let zip = String(food.zipCode)
                    if (newerQuery["zipCodes"].includes(zip)) {
                        filtered = filtered.concat(food)
                    }
                })


                let foodsPojo = {};
                filtered.forEach(food => {
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
                return res.json(foodsPojo);

            })
            .catch(err =>
                res.status(404).json({ noFoodFound: 'No food locations found' }));
    } else {


        Object.keys(newQuery).forEach(key => {
            Food.find({ [key]: true })
                .then(res => {
                    result = result.concat(res);
                }).then(() => {

                    if (newerQuery["zipCodes"].length === 0) {
                        filtered = result.slice()
                    } else {
                        result.forEach(food => {
                            let zip = String(food.zipCode)
                            if (newerQuery["zipCodes"].includes(zip)) {
                                filtered = filtered.concat(food)
                            }
                        })
                    }

                    let foodsPojo = {};
                    filtered.forEach(food => {
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
                    return res.json(foodsPojo);

                })
                .catch(err =>
                    res.status(404).json({ noFoodFound: 'No food locations found' }));
        })
    }
})

module.exports = router;






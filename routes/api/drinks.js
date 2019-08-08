const express = require("express");
const router = express.Router();
const Drink = require('../../models/Drink');
const ObjectId = require('mongodb').ObjectId;

router.get("/", (req, res) => {
    
    req.query.zipCodes = req.query.zipCodes[0].split(","); 


    req.query.caffeine = JSON.parse(req.query.caffeine);
    req.query.sweet = JSON.parse(req.query.sweet);
    req.query.aromatic = JSON.parse(req.query.aromatic);
    req.query.hot = JSON.parse(req.query.hot);
    req.query.iced = JSON.parse(req.query.iced);
    req.query.healthy = JSON.parse(req.query.healthy);
    req.query.sad = JSON.parse(req.query.sad);
    req.query.tired = JSON.parse(req.query.tired);
    req.query.happy = JSON.parse(req.query.happy);
    req.query.angry = JSON.parse(req.query.angry);
    req.query.sick = JSON.parse(req.query.sick);
    req.query.celebratory = JSON.parse(req.query.celebratory);
    req.query.stressed = JSON.parse(req.query.stressed);
    req.query.adventurous = JSON.parse(req.query.adventurous);


    let newQuery = {};
    let newerQuery = {};

    Object.keys(req.query).forEach(category => {
        if(req.query[category] === true){
            Object.assign(newQuery, {[category]: req.query[category]})
        } else if (category === "zipCodes") {
            Object.assign(newerQuery, {[category]: req.query[category]})
        }
    })
    if (Object.keys(newQuery).length === 0 && Object.keys(newerQuery).length === 0) return res.json({});
    let result = [];
    let filtered = [];

    if(Object.keys(newQuery).length === 0) {
        Drink.find({})
        .then(res => {
            result = result.concat(res);
        }).then(() => {
            result.forEach(drink => {
                let zip = String(drink.zipCode)
                if (newerQuery["zipCodes"].includes(zip)) {
                    filtered = filtered.concat(drink)
                }
            })
            let drinksPojo = {};
            filtered.forEach(drink => {
                // drinks.forEach(drink => {
                let drinkPojo = {
                    id: drink._id,
                    name: drink.name,
                    imageUrl: drink.imageUrl,
                    rating: drink.rating,
                    lat: drink.lat,
                    lng: drink.lng,
                    price: drink.price,
                    address: drink.address,
                    city: drink.city,
                    zipCode: drink.zipCode,
                    country: drink.country,
                    state: drink.state,
                    phone: drink.phone,
                    caffeine: drink.caffeine,
                    sweet: drink.sweet,
                    aromatic: drink.aromatic,
                    hot: drink.hot,
                    iced: drink.iced,
                    healthy: drink.healthy,
                    sad: drink.sad,
                    tired: drink.tired,
                    happy: drink.happy,
                    angry: drink.angry,
                    sick: drink.sick,
                    celebratory: drink.celebratory,
                    stressed: drink.stressed,
                    adventurous: drink.adventurous
                }
                drinksPojo[drink._id] = drinkPojo;
                // })
            })
            return res.json(drinksPojo);

        })
            .catch(err =>
                res.status(404).json({ noDrinkFound: 'No drink locations found' }));
    } else {

    Object.keys(newQuery).forEach(key => {
        Drink.find({ 
            [key]: true
        }).then( (res) => {
            result = result.concat(res);
        }).then(() => {
            if (newerQuery.zipCodes.length < 2) {
                filtered = result;
            } else {
                result.forEach(drink => {
                    let zip = String(drink.zipCode)
                    if (newerQuery["zipCodes"].includes(zip)) {
                        filtered = filtered.concat(drink)
                    }
                })
            }
                console.log(filtered);

            let drinksPojo = {};
            filtered.forEach(drink => {
                // drinks.forEach(drink => {
                let drinkPojo = {
                    id: drink._id,
                    name: drink.name,
                    imageUrl: drink.imageUrl,
                    rating: drink.rating,
                    lat: drink.lat,
                    lng: drink.lng,
                    price: drink.price,
                    address: drink.address,
                    city: drink.city,
                    zipCode: drink.zipCode,
                    country: drink.country,
                    state: drink.state,
                    phone: drink.phone,
                    caffeine: drink.caffeine,
                    sweet: drink.sweet,
                    aromatic: drink.aromatic,
                    hot: drink.hot,
                    iced: drink.iced,
                    healthy: drink.healthy,
                    sad: drink.sad,
                    tired: drink.tired,
                    happy: drink.happy,
                    angry: drink.angry,
                    sick: drink.sick,
                    celebratory: drink.celebratory,
                    stressed: drink.stressed,
                    adventurous: drink.adventurous
                }
                drinksPojo[drink._id] = drinkPojo;
                // })
            })
            return res.json(drinksPojo);

        })
                .catch(err =>
                    res.status(404).json({ noDrinkFound: 'No drink locations found' }));


        })
    // })
    }
})

router.get("/:drinkId", (req, res) => {

    //req.params.foodId

    let result = [];

    let drinkId = req.params.drinkId;
    let o_drinkId = new ObjectId(drinkId);

    Drink.findOne({ "_id": o_drinkId })
        .then(res => result = result.concat(res))
        .then(() => {
            let drink = result[0];
            let drinkPojo = {
                id: drink._id,
                name: drink.name,
                imageUrl: drink.imageUrl,
                rating: drink.rating,
                lat: drink.lat,
                lng: drink.lng,
                price: drink.price,
                address: drink.address,
                city: drink.city,
                zipCode: drink.zipCode,
                country: drink.country,
                state: drink.state,
                phone: drink.phone,
                caffeine: drink.caffeine,
                sweet: drink.sweet,
                aromatic: drink.aromatic,
                hot: drink.hot,
                iced: drink.iced,
                healthy: drink.healthy,
                sad: drink.sad,
                tired: drink.tired,
                happy: drink.happy,
                angry: drink.angry,
                sick: drink.sick,
                celebratory: drink.celebratory,
                stressed: drink.stressed,
                adventurous: drink.adventurous
            }

            return res.json(drinkPojo);
        })
        .catch(err => res.status(404));


})



module.exports = router;


  // Drink.find({
    //     caffeine: req.query.caffeine,
    //     sweet: req.query.sweet,
    //     aromatic: req.query.aromatic,
    //     hot: req.query.hot,
    //     iced: req.query.iced,
    //     healthy: req.query.healthy,
    //     sad: req.query.sad,
    //     tired: req.query.tired,
    //     happy: req.query.happy,
    //     angry: req.query.angry,
    //     sick: req.query.sick,
    //     celebratory: req.query.celebratory,
    //     stressed: req.query.stressed,
    //     adventurous: req.query.adventurous
    // )}
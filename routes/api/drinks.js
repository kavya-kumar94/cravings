const express = require("express");
const router = express.Router();
const Drink = require('../../models/Drink')

router.get("/", (req, res) => {
    // Drink.find({
    //     caffeine: req.body.caffeine,
    //     sweet: req.body.sweet,
    //     aromatic: req.body.aromatic,
    //     hot: req.body.hot,
    //     iced: req.body.iced,
    //     healthy: req.body.healthy,
    //     sad: req.body.sad,
    //     tired: req.body.tired,
    //     happy: req.body.happy,
    //     angry: req.body.angry,
    //     sick: req.body.sick,
    //     celebratory: req.body.celebratory,
    //     stressed: req.body.stressed,
    //     adventurous: req.body.adventurous,
    //     price: req.body.price
    // })
    Drink.find({})
    .then(drinks => {
        let drinksPojo = {};
        drinks.forEach(drink => {
            let drinkPojo = {
                id: drink.id,
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
                phone: drink.phone
            }
            drinksPojo[drink.id] = drinkPojo;
        })
        return res.json(drinksPojo);
    })
    .catch(err => console.log(err))
})

module.exports = router;
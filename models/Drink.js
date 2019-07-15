const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const DrinkSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    caffeine: {
        type: Boolean,
        required: true
    },
    sweet: {
        type: Boolean,
        required: true
    },
    aromatic: {
        type: Boolean,
        required: true
    },
    sparkling: {
        type: Boolean,
        required: true
    },
    hot: {
        type: Boolean,
        required: true
    },
    iced: {
        type: Boolean,
        required: true
    },
    healthy: {
        type: Boolean,
        required: true
    },
    sad: {
        type: Boolean,
        required: true
    },
    happy: {
        type: Boolean,
        required: true
    },
    angry: {
        type: Boolean,
        required: true
    },
    sick: {
        type: Boolean,
        required: true
    },
    celebratory: {
        type: Boolean,
        required: true
    },
    stressed: {
        type: Boolean,
        required: true
    },
    adventurous: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const Drink = mongoose.model('drinks', DrinkSchema);
module.exports = Drink;
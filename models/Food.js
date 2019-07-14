const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
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
    price: {
        type: Number,
        required: true
    },
    sweet: {
        type: Boolean,
        required: true
    },
    spicy: {
        type: Boolean,
        required: true
    },
    salty: {
        type: Boolean,
        required: true
    },
    savory: {
        type: Boolean,
        required: true
    },
    hot: {
        type: Boolean,
        required: true
    },
    cold: {
        type: Boolean,
        required: true
    },
    healthy: {
        type: Boolean,
        required: true
    },
    junk: {
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
    sweet: {
        type: Boolean,
        required: true
    },
    sweet: {
        type: Boolean,
        required: true
    },
    sweet: {
        type: Boolean,
        required: true
    },
    sweet: {
        type: Boolean,
        required: true
    },
    sweet: {
        type: Boolean,
        required: true
    },
   
})
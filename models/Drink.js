const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const DrinkSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
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
    price: {
        type: String,
        // required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        // required: true
    },
    // ATTRIBUTES: FEELINGS/CRAVINGS:
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
    tired: {
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
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
    // restaurant_id: {
    //     type: Array,
    //     required: true
    // }
})

const Drink = mongoose.model('drinks', DrinkSchema);
module.exports = Drink;
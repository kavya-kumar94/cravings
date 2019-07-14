const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema ({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    postal_code: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    phone: {
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
    price: {
        type: Number,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    ///qualities
    // sweet: {
    //     type: Boolean,
    //     required: true
    // },
    // spicy: {
    //     type: Boolean,
    //     required: true
    // },
    // salty: {
    //     type: Boolean,
    //     required: true
    // },
    // savory: {
    //     type: Boolean,
    //     required: true
    // },
    // hot: {
    //     type: Boolean,
    //     required: true
    // },
    // cold: {
    //     type: Boolean,
    //     required: true
    // },
    // healthy: {
    //     type: Boolean,
    //     required: true
    // },
    // junk: {
    //     type: Boolean,
    //     required: true
    // },
    // sad: {
    //     type: Boolean,
    //     required: true
    // },
    // happy: {
    //     type: Boolean,
    //     required: true
    // },
    // angry: {
    //     type: Boolean,
    //     required: true
    // },
    // sick: {
    //     type: Boolean,
    //     required: true
    // },
    // celebratory: {
    //     type: Boolean,
    //     required: true
    // },
    // stressed: {
    //     type: Boolean,
    //     required: true
    // },
    // adventurous: {
    //     type: Boolean,
    //     required: true
    // },
   
})

const Food = mongoose.model('foods', FoodSchema);
module.exports = Food;
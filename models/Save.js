const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SaveSchema = new Schema ({
    id: {
        type: String,
        required: true
    },
    restaurant_id: {
        type: Number,
        required: true
    },
    user_id: {
        type: Number,
        required: true
    }
})

const Save = mongoose.model('saves', SaveSchema);
module.exports = Save;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    foodSaves: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Food' 
    }],
    drinkSaves: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Drink' 
    }]

});

const User = mongoose.model('users', UserSchema);
module.exports = User;
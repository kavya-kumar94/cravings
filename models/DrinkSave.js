const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DrinkSaveSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    drinkId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'drinks'
    }
});

const DrinkSave = mongoose.model('drinksaves', DrinkSaveSchema);
module.exports = DrinkSave;
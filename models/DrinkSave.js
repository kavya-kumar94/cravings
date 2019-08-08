const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DrinkSaveSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    drinkId: {
        type: Schema.Types.ObjectId,
        ref: 'Drink'
    }
});

const DrinkSave = mongoose.model('drinksaves', DrinkSaveSchema);
module.exports = DrinkSave;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSaveSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    foodId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'foods'
    }
});

const FoodSave = mongoose.model('foodsaves', FoodSaveSchema);
module.exports = FoodSave;

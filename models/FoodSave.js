const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSaveSchema = new Schema({
userId: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
}],
foodId: [{
    type: Schema.Types.ObjectId,
    ref: 'Food'
}]
})

const FoodSave = mongoose.model('foods', FoodSaveSchema);
module.exports = FoodSave;
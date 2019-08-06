const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    users: [{
        type: String
    }]
});

module.exports = Room = mongoose.model('Room', RoomSchema);

const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type:String,
        required: true,
        min: 6,
        max: 1024,
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
},
{collection:'Users'}
);

module.exports = mongoose.model('User', user);

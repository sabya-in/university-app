const mongoose = require('mongoose');


// News Schema
const newsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default : Date.now
    },
    link: {
        type: String,
        required: false
    },
    likes: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('News', newsSchema);

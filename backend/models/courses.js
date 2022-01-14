const mongoose = require('mongoose');

// Course Schema
const courseSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    iconUrl: {
        type: String,
        required: true
    },
    longDescription: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lon: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Course', courseSchema);

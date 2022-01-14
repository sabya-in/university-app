const mongoose = require('mongoose');
const bcrypt = require ('bcryptjs');
const config = require ('../config/db');

// Course Schema
const CourseSchema = mongoose.Schema({
    description: {
        type: String
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

const Course = module.exports = mongoose.model('Course', CourseSchema);

module.exports.getCourses = (callback) => {
    const query = {category: "rfg4"};
    Course.findOne(query, callback);
};
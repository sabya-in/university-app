const express = require('express')
const Courses = require('../models/courses');

const router = new express.Router()

/*const COURSES = [

     {
        id:0,
        description: "Applied Computer Science (Ms)",
        iconUrl: "../assets/cs.png",
        longDescription: "In the Master's programme, the theoretical and application-oriented knowledge and skills are deepened and expanded",
        category: 'MASTER',
        lat: 44.1,
        lon: 23.6
    },
    {
        id: 1,
        description: "Artificial Intelligence and Data Science",
        iconUrl: '../assets/AI.png',
        longDescription: "The Master of Artificial Intelligence and Data Science course addresses this transformation by providing you as a student with the broad and in-depth skills required to work with and develop AI",
        category: 'MASTER',
        lat: 35,
        lon: 26
    },

     {
        id: 3,
        description: 'Health Informatics',
        longDescription: "This degree course educates students to become computer scientists in the health industry.",
        iconUrl: '../assets/HI.png',
        category: 'BACHELOR',
        lat: 56,
        lon: 28
    },
     {
        id: 4,
        description: 'Tourism Managament',
        longDescription: " if you want to pursue a career in the regional and global tourism industry, a degree programme with years of experience awaits you in Deggendorf.",
        iconUrl: '../assets/TM.png',
        category: 'BACHELOR',
        lat: 56,
        lon: 42
    }

];
*/



router.get('/getCourses', (req, res) => {
    console.log('hit');
    courses = Courses.getCourses();
    console.log(courses);
    res.status(200).json({"courses": courses})
})


module.exports = router;

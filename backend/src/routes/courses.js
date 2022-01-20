/**
* @api {post} /coursess/ getCourses
* @apiName Courses
*@apiParam (Parameter) {null} None.
* @apiGroup Courses
*
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
* 
{
  
    {
        "id":{"$oid":"61e45aadb82b67271423b98c"},
        "description":"Health Informatics",
        "iconUrl":"../assets/HI.png",
        "longDescription":"This degree course educates students to become computer scientists in the health industry",
        "category":"BACHELOR",
        "lat":56,
        "lon":28,
        "_v":0
    }

}
*
* @apiError Database unavailable
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 bad request
*    
{
  ""
}
*       
*     
*/

const express = require('express')
const Course = require('../models/courses');

const router = new express.Router()


//Getting all courses
router.get('/getCourses', async (req,res) => {
    try {
        console.log("getting all courses")
        const courses = await Course.find();
        console.log(courses)
        res.status(200).json(courses);
    }
     catch (error) {
        res.status(500).json({ message : error.message})
    }
})

// Getting one course
router.get('/:id', getCourse, async (req,res) => {
    console.log("getting single course")
    res.send(res.course);
})

//Creating one course
router.post('/', async (req,res) => {
    const course = new Course({
        description : req.body.description,
        iconUrl : req.body.iconUrl,
        longDescription : req.body.longDescription,
        category : req.body.category,
        lat : req.body.lat,
        lon : req.body.lon

    })

    try {
        const newCourse = await course.save()
        res.status(201).json(newCourse)
    }
    catch(err){
        res.status(400).json({message : err.message})
    }
})


//Updating a course
router.patch('/:id', getCourse, async (req,res) => {
    if (req.body.description != null){
        res.course.name =  req.body.description
    }

    if (req.body.category != null){
        res.course.category =  req.body.category
    }
    if (req.body.longDescription != null){
        res.course.longDescription =  req.body.longDescription
    }

    try {
        const updatedCourse = await res.course.save()
        res.json(updatedCourse)
    } catch (error) {
        res.status(400).json({message : err.message})
    }
})


//Deleting one course
router.delete('/:id',getCourse, async (req,res) => {

    try {
        await res.course.remove()
        res.json("deleted course")
    } 
    catch (error) {
        res.status(500).json({message : err.message})
    }
})

// helper function 
async function getCourse(req,res,next){
    let course;
    try {
        course = await Course.findById(req.params.id)
        if (course == null){
            return res.status(404).json({message : 'Cannot find course'})
        }
    }catch (err){
        return res.status(500).json({ message : err.message})
    }
    res.course = course
    next()
}


module.exports = router;

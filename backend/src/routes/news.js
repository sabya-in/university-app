/**
 * @api {get} /news/getNews
 * @api {get} /news/:id
 * @api {patch} /news/:id
 * @api {delete} /news/:id
*/

const express = require('express')
const router = new express.Router()
const News = require('../models/news')

//Getting all news articles
router.get('/getNews', async (req,res) => {
  try {
      const articles = await News.find();
      res.status(200).json(articles);
  }
   catch (error) {
      res.status(500).json({ message : error.message})
  }
})
//Creating an article
router.post('/', async (req,res) => {
  const article = new News({
    title : req.body.title,
    description : req.body.description,
    timestamp : req.body.timestamp,
    link : req.body.link,
    likes : req.body.likes

  })

  try {
      const newArticle = await article.save()
      res.status(201).json(newArticle)
  }
  catch(err){
      res.status(400).json({message : err.message})
  }
})




// Getting single news article
router.get('/:id', getArticle, async (req,res) => {
  res.send(res.articles);
})


//Updating an article
router.patch('/:id', getArticle, async (req,res) => {
  if (req.body.title != null){
      res.course.title =  req.body.title
  }

  if (req.body.description != null){
      res.course.description =  req.body.catdescriptionegory
  }
  if (req.body.link != null){
      res.course.link =  req.body.link
  }

  try {
      const updatedArticle = await res.article.save()
      res.json(updatedArticle)
  } catch (error) {
      res.status(400).json({message : err.message})
  }
})



//Deleting oan article
router.delete('/:id',getArticle, async (req,res) => {

  try {
      await res.article.remove()
      res.json("deleted news article")
  } 
  catch (error) {
      res.status(500).json({message : err.message})
  }
})

// helper function 
async function getArticle(req,res,next){
  let articles;
  try {
    articles = await News.findById(req.params.id)
      if (articles == null){
          return res.status(404).json({message : 'Cannot find news article'})
      }
  }catch (err){
      return res.status(500).json({ message : err.message})
  }
  res.articles = articles
  console.log(articles);
  next()
}

// router.get('/getNews', (req, res) => {
//     res.status(200).json({"news": articles})
// })

module.exports = router
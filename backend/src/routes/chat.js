const express = require('express')

const router = new express.Router()

router.get('/chat/', (req, res) => {
    res.json("Chat barebone api online")
})

module.exports=router

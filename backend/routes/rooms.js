const express = require('express')
const router = new express.Router()
const Thabella = require("request");


//thabella api call
router.get("/thabellaevents", (req, res) => {
    Thabella.get(
      `https://thabella.th-deg.de/thabella/opn/period/findByRoom/${req.query.roomId}/${req.query.date}%20${req.query.hour}`,
      (error, response, body) => {
        if (error) {
            
          res.status(401).send(error);
        }
        res.status(200).json(response);
      }
    );
  });

  module.exports = router;
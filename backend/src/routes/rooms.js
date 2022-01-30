/**
* @api {post} /rooms/ thabellaevents
* @apiName Rooms
*@apiParam (Parameter) {null} None.
* @apiGroup Rooms
*
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
* 
{
  
    "user": {
        "age": 24,
        "adminRole": true,
        "_id": "6017d2e61daefe11c0935c55",
        "name": "sabyasachi",
        "email": "user@gmail.com",
        "__v": 3
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDE3ZDJlNjFkYWVmZTExYzA5MzVjNTUiLCJpYXQiOjE2MTIxNzczODB9.d031Duz51PkFjyTgk8EXHG-bjNtEdSOafE3TbVWy4Hk"

}
*
* @apiError Thabella api unavailable
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
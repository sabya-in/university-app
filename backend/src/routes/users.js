/**
* @api {post} /user/ register
* @apiName Login
*@apiParam (Parameter) {string} name Users Name.
*@apiParam (Parameter) {string} email Users Email.
*@apiParam (Parameter) {string} password Users Password.
* @apiGroup User
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
* @apiError Email already exist
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 400 bad request
*    
{
    
    error:"E11000 duplicate key error collection: thd-api.users index: email_1 dup key: { email: \"kaber12@gmail.com\" }"

}
*       
*     
*/


const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();

const User = require('../models/users');
const config = require("../config/db");

// Register
router.post('/register', (req, res) => {
    console.log(req.body);

    let newUser = new User({
        name: req.body.name,
        email: req.body.username,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({success: false, msg: 'Failed to register user'});
        } else {
            res.json({success: true, msg: 'User registered'});
        }
    });
});

// Login
router.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        // There is no user with that username
        if (!user) {
            return res.json({success: false, msg: 'User not found'});
        }
        // User found, check password
        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if(isMatch) {

                // create jwt
                const token = jwt.sign(user.toObject(), config.secret, {
                    expiresIn: 900 // 10 min
                });

                jwt.verify(token, config.secret, (err, data) => {console.log(err, data);});

                res.json({
                    success: true,
                    token: `Bearer ${token}`,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                    }
                });
            } else {
                return res.json({success: false, msg: 'Wrong password'});
            }
        });
    });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({user: req.user});
});

module.exports = router;
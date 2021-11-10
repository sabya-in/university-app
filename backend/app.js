/****** Requires *****/

const express = require('express');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const session = require("express-session");

// Initialize app with express
const app = express();

/***** MongoDB Connection *****/

const config = require('./config/db');
mongoose.connect(config.database);
// On Connection
mongoose.connection.on('connected', () => {
   console.log(`connected to database ${config.database}`);
});
// On Error
mongoose.connection.on('error', (err) => {
   console.log(`Database error: ${err}`);
});


/***** Middleware *****/

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({secret: config.secret}));

// Passport
app.use(passport.initialize());
app.use(passport.session());
require('./config/pass')(passport);

// Routes
const users = require('./routes/users');
app.use('/users', users);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Index route
app.get('/', (req, res) => res.send('Invalid endpoint'));

// Redirect invalid routes
app.get('*', (req, res) => {
   //res.sendFile(path.join(__dirname, 'public/index.html'));
   res.send('Invalid endpoint should redirect to Home')
});

// Server port
const port = 3000;
module.exports = app.listen(port, () => console.log(`Server started on port ${port}`));
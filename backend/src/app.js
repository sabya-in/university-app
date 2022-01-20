/****** Requires *****/

const express = require('express');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const session = require("express-session");

/**
 * parses the requests coming from the front end
 */
const bodyParser= require('body-parser');

// Initialize app with express
const app = express();

/***** SocketIO Connection *****/
let http = require("http").createServer(app);

const io = require("socket.io")(http, {
  cors: {
    origins: "*",
  },
});

const activeUsers = new Set();
io.on("connection", async (socket) => {
   console.log("socket id is:", socket.id);

   socket.on("new user", function (data) {
      socket.userId = data;
      activeUsers.add(data);
      io.emit("new user", [...activeUsers]);
    });

   socket.on("active users", (activeUsers) => {
      socket.broadcast.to(socket.id).emit('active users', activeUsers);
   });
 
   socket.on("disconnect", () => {
     console.log("user disconnected");
   });
 
   socket.on("message", (msg) => {
     //socket.broadcast.emit("message", msg);
     //socket.broadcast.to(socket.id).emit('message', msg);
     io.emit('message', socket.userId + ' said: ' + msg);
   });
 });


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

/***** Set cors options *****/

corsOptions = {
   origin: 'http://localhost:4200',
   credentials: true };


/***** Middleware *****/

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({secret: config.secret}));

// Passport
app.use(passport.initialize());
app.use(passport.session());
require('./config/pass')(passport);

// Routes
const users = require('./routes/users');
const newsRouter = require('./routes/news');
const courseRouter  = require('./routes/courses');
const room = require('./routes/rooms')
app.use('/users', users);
const chat  = require('./routes/chat');

app.use('/users', users);
app.use('/news', newsRouter);
app.use('/courses', courseRouter);
app.use('/chat', chat);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Index route
app.get('/', (req, res) => res.send('Invalid endpoint'));

/**
 * to handle json data
 */

 app.use(bodyParser.json());
 app.use('/room',room);


// Redirect invalid routes
// app.get('*', (req, res) => {
//    //res.sendFile(path.join(__dirname, 'public/index.html'));
//    res.send('Invalid endpoint should redirect to Home')
// });

// Server port
const port = 3000;
module.exports = http.listen(port, () => console.log(`Server started on port ${port}`))
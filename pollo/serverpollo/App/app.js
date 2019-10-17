const express = require('express');
const mongoose = require('mongoose');
const menuRoutes = require('./routes/menu')
const bodyParser = require('body-parser');
const fileupload = require("express-fileupload");
const path = require('path');
const multer = require('multer');

const app = express();



// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
// app.use(bodyParser({limit: '50mb', extended: true}));
// app.use(bodyParser.json({limit: '10mb', extended: true}))
// app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))

mongoose.connect('mongodb+srv://pollitisuno:YG6bHrGTfQo7nukM@pollodany-h48o6.mongodb.net/test?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use((req, res, next) => {
  console.log('Request received!');
  next();
});


app.use('/api/menu', menuRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({ message: 'Your request was successful!' });
  next();
});

app.use((req, res, next) => {
  console.log('Response sent successfully!');
});


module.exports = app;

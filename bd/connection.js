const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Test_db', (err, res) => {

    if (err) throw err;

    console.log('Base de datos ONLINE');

});

module.exports = router;  
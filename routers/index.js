'use strict'

const express = require('express');
const api  = express.Router();
const imagenesCtr = require('../controllers/imgs');


api.get('/principal', (req, res) => {
  console.log('  >>>>>>>seeeee>>>');
  res.send({ message: 'Hello word!' })
});

module.exports = api;

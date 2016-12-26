'use strict'

const express = require('express');
const api  = express.Router();
const imagenesCtr = require('../controllers/imgs');
const User = require('../models/user');

//obtener usuarios
api.get('/users' ,(req, res) => {
  User.find({}, (err, users) => {
    if(err) return res.status(500).send({message: `Error al procesar la peticion ${err}`})
    if(!users) return res.status(404).send({message: 'No existen productos'})
    res.status(200).send({ users })
  })
});

api.get('/principal', (req, res) => {
  console.log('  >>>>>>>seeeee>>>');
  res.send({ message: 'Hello word!' })
});

module.exports = api;

'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: String,
    apellido: String,
    edad: Number
});

module.exports = mongoose.model('User', UserSchema);
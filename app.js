'use strict'

const express    = require('express');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const api        = require('./routers');
const app        = express();
const port       = process.env.PORT || 3000;

const cors       = require('./cors');

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use('/api', api);
app.use(cors.permisos);
mongoose.connect('mongodb://localhost/shop', (err, res) => {
	if(err) {
		return console.log("Error al conectar a la base de datos");
	}
	console.log("Conexion establecida con exito");
	app.listen(port, function () {
		console.log(`App corriendo en subir-imagenes.localhost:${port}/`);
	})
})
'use strict'

const express    = require('express');
const bodyParser = require('body-parser');
const app        = express();
const api        = require('./routers');
const port       = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use('/api', api);

app.listen(port, function () {
	console.log(`App corriendo en subir-imagenes.localhost:${port}/`);
})

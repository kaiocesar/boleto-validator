'use strict'

const express = require('express');
const app = express();

app.get('/boletos/:code', (req, res) => {
	if (req.params.code.length != 44) {
		return res.status(404).send({message: "not enough digits"});
	}
	res.send(req.params);
});

module.exports = app
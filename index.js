'use strict'

const express = require('express');
const PORT = 5000;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
	res.send('First structutre');
});

app.listen(PORT, HOST);
console.log(`Flying on http://${HOST}:${PORT}`);

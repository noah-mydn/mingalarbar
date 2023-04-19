const express = require('express');
const cors = require('cors');

let app = express();
const menuRouter = require('../src/Routes/menuRoute');
app.use(express.json());

app.use (express.static('./public'));
app.use(cors({
    origin: 'http://localhost:3001',
}));

app.use('/api/v1/menus',menuRouter)

module.exports = app;
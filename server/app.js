'use strict';

const express = require('express');
const app = express();
const fs = require('fs');
const PORT = 3000;
//TODO add directory to check versions

const router = require('./router/router');

app.use(router);

app.listen(PORT, (err) => {
    if(!err) console.log("Sever started listening at:", PORT);
});
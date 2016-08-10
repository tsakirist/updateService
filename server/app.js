'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const router = require('./router/router');

app.use(router);

app.listen(PORT, (err) => {
    if(!err) {
        console.log("Sever started listening at:", PORT);
    }
});
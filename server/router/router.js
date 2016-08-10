'use strict';

const express = require('express');
const router = express.Router();
const fileChecker = require('../checker/filechecker');

router.get('/checkVersion', (req, res) => {
    const data = fileChecker.getLastVersion();
    console.log(data);
    res.send(data.version);
});

router.get('/getLastVersion', (req, res) => {
    res.send(fileChecker.getFile());
});

module.exports = router;
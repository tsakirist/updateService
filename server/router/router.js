'use strict';

const express = require('express');
const router = express.Router();
const fileChecker = require('../checker/filechecker');

router.get('/checkVersion', (req, res) => {
    const version = fileChecker.getLastVersion();
    console.log(version);
    res.send(version);
});

router.get('/getLastVersion', (req, res) => {
    res.send(fileChecker.getFile());
});

module.exports = router;
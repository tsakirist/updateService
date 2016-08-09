'use strict';

const express = require('express');
const router = express.Router();
const fileChecker = require('../checker/filechecker');

router.get('/checkVersion', (req, res) => {
    //TODO check version of last bundle and send it to res
    const version = fileChecker.getLastVersion();
    console.log(version);
    res.send(version);
});

router.get('/getLastVersion', (req, res) => {
    //TODO configure another endpoint to send him the last version of the file, prolly POST
});

module.exports = router;
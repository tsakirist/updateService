'use strict';

const express = require('express');
const router = express.Router();
const fileHandler = require('../services/filehandler');

router.get('/version', (req, res) => {
    const version = fileHandler.getLastProperties().version;
    console.log("Get /version", version);
    res.send(version);
});

router.get('/name', (req, res) => {
    const name = fileHandler.getLastProperties().name;
    console.log('Get /name', name);
    res.send(name);
});

router.get('/properties', (req, res) => {
    const prop = fileHandler.getLastProperties();
    console.log("Get /properties", prop);
    res.send(prop);
});

router.get('/file', (req, res) => {
    const path = fileHandler.getFilePath();
    console.log('Get /file', path);
    res.download(path);
});

module.exports = router;
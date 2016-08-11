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

// 'use strict';
//
// const express = require('express');
// const router = express.Router();
// const fileChecker = require('./filehandler');
//
// router.get('/checkVersion', (req, res) => {
//     const data = fileChecker.getLastVersion();
//     console.log(data);
//     res.json(data);
// });
//
// router.get('/getFile', (req, res) => {
//     // res.set('Content-Type', 'application/x-gzip');
//     res.send(fileChecker.getFile());
// });
//
// module.exports = router;
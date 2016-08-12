'use strict';

const filehandler = require('./services/filehandler');

filehandler.checkAndUpdate().then((out) => {
    console.log('@Main app:', out);
}, (err) => {
    console.log(err);
});
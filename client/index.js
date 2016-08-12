'use strict';

const filehandler = require('./services/filehandler');

start();
setInterval(start, 15000);

function start() {
    filehandler.checkAndUpdate().then((out) => {
        console.log('@Main app:', out);
    }, (err) => {
        console.log(err);
    });
}

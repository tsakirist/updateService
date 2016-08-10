'use strict';

const execFile = require('child_process').execFile;
const config = require('./config/config.json');
const request = require('./services/request');
const fileHandler = require('./services/filehandler');
const httpOptions = config.options;
const filePath = config.filePath;
const currentVersion = config.version;

//TODO check version on boot , execFile node app and also tar and also npm install and run app, interval like 1min to check for version

request.getVersion(httpOptions).then((serverVersion) => {
    const flag = fileHandler.checkVersion(filePath, currentVersion, serverVersion);
    console.log(`Inside app..\nVersions match? ${flag ? 'YES' : 'NO'}`);
}, (err) => {
    console.log('Error:', err);
});

request.getFile(httpOptions).then((data) => {
    console.log('File contents:', data);
}, (err) => {
    console.log(err);
});

'use strict';

const request = require('./services/request');
const fileHandler = require('./services/filehandler');
const httpOptions = require('./config/http.json');

//TODO check version on boot , execFile node app and also tar and also npm install and run app, interval like 1min to check for version
//TODO if false then untar install and exec , NEED to create functions in filehandler

// request.getVersion(httpOptions).then((serverFile) => {
//     serverFile = JSON.parse(serverFile);
//     const flag = fileHandler.checkVersion(serverFile.version);
//     console.log(`Inside app..\nVersions match? ${flag ? 'YES' : 'NO'}`);
//     if(!flag) {
//         fileHandler.processFile(serverFile.name);
//     }
// }, (err) => {
//     console.log('Error:', err);
// });

// request.getVersion(httpOptions).then((serverFile) => {
//     console.log(serverFile);
// });

request.getFile(httpOptions).then((data) => {
    data = JSON.parse(data);
    data.data = new Buffer(data.data);
    fileHandler.writeFile(data.name, data.data);
    fileHandler.processFile(data.name);
    // console.log(data);
    // fileHandler.writeFile(data.name , data.data);
    // fileHandler.processFile(data.name);
}, (err) => {
    console.log(err);
});

'use strict';

const http = require('http');
const fs = require('fs');

/** Function httpGet
 *  makes http services to the server endpoints
 *  @param options
 *  @returns {Promise} with JSON data
 */
function httpGet(options) {
    return new Promise((resolve, reject) => {
        const req = http.request(options, (res) => {
            if(res.statusCode < 200 || res.statusCode > 299) {
                return reject('Error has occurred ' + res.statusCode);
            }
            //  res.setEncoding('utf8');
            // let data = Buffer.alloc(0);
            // res.on('data', (chunk) => {
            //     data = Buffer.concat([data, chunk], data.length + chunk.length);
            // });
            // res.on('end', () => {
            //     //resolve(JSON.parse(data.join('')));
            //     data
            // });
            const tempBundle = fs.createWriteStream('tempBundle.tar.gz');
            res.pipe(tempBundle);

        });
        req.on('error', err => reject(err));
        req.end();
    });
}

/** Function getVersion
 *  makes http services to the endpoint /checkVersion
 *  to get the last version of the file
 *   @param options
 *  @returns {Promise}
 */
function getVersion(options) {
    options.path = '/checkVersion';
    return httpGet(options);
}
/** Function getFile
 *  makes http services to the endpoint /getLastVersion
 *  to get the contents of the file
 *  @param options
 *  @returns {Promise}
 */
function getFile(options) {
    options.path = '/getFile';
    // options.headers = {
    //     accept: '*/*',
    //     'accept-encoding': 'gzip, deflate, sdch',
    //     connection: 'keep-alive',
    //     'cache-control': 'no-cache',
    //     'accept-language': 'en-US,en;q=0.8'
    // };
    return httpGet(options);
}

module.exports = {
    getVersion : getVersion,
    getFile : getFile
};
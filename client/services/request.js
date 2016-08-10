'use strict';

const http = require('http');

/** Function httpGet
 *  makes http services to the server endpoints
 * @param options
 * @returns {Promise}
 */
function httpGet(options) {
    return new Promise((resolve, reject) => {
        http.request(options, (res) => {
            if(res.statusCode < 200 || res.statusCode > 299) {
                reject('Error has occurred ' + res.statusCode);
            }
            res.setEncoding('utf8');
            const data = [];
            res.on('data', (chunk) => {
                data.push(chunk);
            });
            res.on('end', () => {
                resolve(data.join(''));
            });
        }).end();
    });
}

/** Function getVersion
 *  makes http services to the endpoint /checkVersion
 *  to get the last version of the file
 * @param options
 * @returns {Promise}
 */
function getVersion(options) {
    options.path = '/checkVersion';
    return httpGet(options);
}
/** Function getFile
 *  makes http services to the endpoint /getLastVersion
 *  to get the contents of the file
 * @param options
 * @returns {Promise}
 */
function getFile(options) {
    options.path = '/getLastVersion';
    return httpGet(options);
}

module.exports = {
    getVersion : getVersion,
    getFile : getFile
};
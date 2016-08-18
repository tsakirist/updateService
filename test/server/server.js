const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const request = require('request');
const url = "http://localhost:3000";

describe('Server API', () => {

    describe('Request to /version', () => {

        it('should return 200 status', (done) => {
            request(url + '/version', (err, res, body) => {
                expect(res.statusCode).to.equal(200);
                done();
            })
        });

        it('should return the version of the file (vX.X)', (done) => {
            request(url + '/version', (err, res, body) => {
                expect(body).to.have.length.within(4,6);
                done();
            })
        });
    });

    describe('Request to /name', () => {

        it('should return 200 status', (done) => {
            request(url + '/name', (err, res, body) => {
                expect(res.statusCode).to.equal(200);
                done();
            })
        });

        it('should return the name of the file as string', (done) => {
            request(url + '/name', (err, res, body) => {
                expect(body).to.be.a('string');
                done();
            })
        });
    });

    describe('Request to /properties', () => {

        it('should return 200 status', (done) => {
            request(url + '/properties', (err, res, body) => {
                //checking with should
                (res.statusCode).should.equal(200);
                done();
            })
        });

        it('should return json with 2 fields {name, version}', (done) => {
            request(url + '/properties', (err, res, body) => {
                //checking with should
                (JSON.parse(body)).should.have.all.keys(['name', 'version']);
                // expect(JSON.parse(body)).to.have.all.keys("name", "version");
                done();
            })
        })
    });

    describe('Request to /file', () => {

        it('should return 200 status', (done) => {
            request(url + '/file', (err, res, body) => {
                expect(res.statusCode).to.equal(200);
                done();
            })
        });

        it('should return content-disposition header including filename', (done) => {
            request(url + '/file', (err, res, body) => {
                expect(res.headers['content-disposition']).to.contain('filename');
                done();
            })
        })
    })

});
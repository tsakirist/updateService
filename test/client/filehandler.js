const expect = require('chai').expect;
const filehandler = require('../../client/services/filehandler');

// Mocha has built-in support for promises , so we can omit done() callback with a return

describe('Client filehandler functions', () => {

    describe('checkVersion(version)', () => {

        const prom = filehandler.checkVersion('w/e');

        it('should return promise', (done) => {
            expect(prom).to.be.a('promise');
            done();
        });

        it('resolved promise should contain json with 2 fields {version, match}', () => {
            return prom.then((out) => {
                expect(out).to.have.all.keys('version', 'match');
            })
        });
    });

    describe('getOptions()', () => {

        const val = filehandler.getOptions();

        it('should return json object', () => {
            expect(val).to.be.an('object');
        })
    });

    describe('getFile()', () => {

        const prom = filehandler.getFile();

        it('should return promise', (done) => {
            expect(prom).to.be.a('promise');
            done();
        });

        it('resolved promise should contain a string with filename', () => {
            return prom.then((out) => {
                expect(out).to.be.a('string');
            })
        });

        after(() => {
            const exec = require('child_process').exec;
            exec('rm *.gz', (err) => {
                if(err) console.log(err);
            });
        })
    });

});
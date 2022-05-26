'use strict';

const {expect} = require('chai');
const request = require('supertest');

describe('Integration API Tests', () => {
  context('Success on Response', async () => {
    it('should returns a radio streaming list with 200 HTTP STATUS CODE', async() => {
      const response = await request('https://de1.api.radio-browser.info')
        .get('/json/stations?limit=10').send();
      expect(response.statusCode).to.equal(200);
      expect(response).to.be.an('array');
    });
  });
  context('Error on Response', async () => {
    it('should returns a 404 HTTP Status Code', async() => {
      const response = await request('https://de1.api.radio-browser.info')
        .get('/json/teste').send();
      expect(response.statusCode).to.equal(404);
      expect(response).to.be.undefined;
    });
  });
});

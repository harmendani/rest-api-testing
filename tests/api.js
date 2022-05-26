'use strict';

const request = require('supertest');

describe('Integration API Tests', () => {
  context('Success on Response', async () => {
    it('should return contents from search', (done) => {
      request('https://de1.api.radio-browser.info')
        .get('/json/stations?limit=10')
        .send()
        .expect(200)
        .end((error) => { 
            done(error);          
        });
    });
  });
});

const app = require('./app');
const request = require('supertest')

describe('API', function() {
    //pass
    it('responds with json', function(done) {
      request(app)
        .get('/planets')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
        
    });
  });

describe('API', function() {
    //pass
    it('responds with json', function(done) {
        request(app)
        .get('/launches')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200,done)
        
    });
    });

describe('API', function() {

    //pass
    it('should add a new launch', function(done) {
        request(app)
        .post('/launches')
        .send({mission: 'Hello New Earth', rocket: 'Explorer IS1', launchDate: '2023-06-15', destination: 'Kepler-62 f'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201, done)
        
    });


    //fail
    it('should return an error if missing required launch property', function (done) {
        const invalidLaunch = {
          rocket: 'Rocket 2',
          launchDate: '2023-11-06',
          target: 'Target 2',
        };
    
        request(app)
          .post('/launches')
          .send({mission: 'Hello New Earth', rocket: 'Explorer IS1', launchDate: '2023-06-15'})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(400, done)
      });
    });
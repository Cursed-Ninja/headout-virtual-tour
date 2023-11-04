import chai from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';
import app from '../index.js';

chai.use(chaiHttp);
const expect = chai.expect;
const CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${encodeURIComponent(process.env.DB_PSWD)}@cluster.lczmihh.mongodb.net/headout?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 6001;

describe('API Routes', () => {
  before((done) => {
    mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
      if (error) {
        done(error);
      } else {
        mongoose.connection.db.dropDatabase((dropError) => {
          if (dropError) {
            done(dropError);
          } else {
            done();
          }
        });
      }
    });
  });

  describe('Authentication Routes', () => {
    it('should register a new user', (done) => {
      chai
        .request(app)
        .post('/auth/signup')
        .send({
          firstName: "firstName",
          lastName: "lastName",
          email: "email@email.com",
          isSeller: true,
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('should log in an existing user', (done) => {
      chai
        .request(app)
        .post('/auth/signin')
        .send({
          email: "sanchuchhabra5@gmail.com",
          password: "WkWQTi8NMA9",
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});

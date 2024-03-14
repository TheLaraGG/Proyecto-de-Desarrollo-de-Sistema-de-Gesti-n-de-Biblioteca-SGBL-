import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/main.js';
const should = chai.should();

chai.use(chaiHttp);

describe('Autenticación', () => {
    it('debería devolver un token al iniciar sesión con credenciales válidas', (done) => {
        chai.request(server)
            .post('/login')
            .send({ mail: 'admin@gmail.com', password: 'admin' })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('token');
                done();
            });
    });

    it('debería devolver un error 401 al iniciar sesión con credenciales inválidas', (done) => {
        chai.request(server)
            .post('/login')
            .send({ mail: 'esano@gmail.com', password: 'malacontra123' })
            .end((err, res) => {
                res.should.have.status(401);
                done();
            });
    });
});

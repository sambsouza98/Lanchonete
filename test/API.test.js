const chai = require('chai');
const chaiHttp = require('chai-http');
const {XBURGUERSALADA} = require('../enums/lanches');
const should = chai.should();
chai.use(chaiHttp);

describe("Teste das APIs da Lanchonete",function() {
    it('Testando GET todos os ingredientes', (done) => {
        chai.request('http://localhost:8080')
            .get('/Ingredientes')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });

    it('Testando GET um ingrediente', (done) => {
        const idIngrediente = 1;
        chai.request('http://localhost:8080')
            .get(`/Ingredientes/${idIngrediente}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });

    it('Testando GET todos os Lanches', (done) => {
        chai.request('http://localhost:8080')
            .get('/Cardapio')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });

    it('Testando GET um lanche', (done) => {
        const idLanche = 1;
        chai.request('http://localhost:8080')
            .get(`/Cardapio/${idLanche}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });

    it('Teste de inserir um pedido', (done) => {
        const objEnviado = {
            lanche: XBURGUERSALADA,
        };

        chai.request('http://localhost:8080')
            .post('/Pedido')
            .send(objEnviado)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.equal(4.41);
                done();
            });
    });

});
const getIngredientes = require('./services/getIngredientes')();
const getCardapio= require('./services/getCardapio')();
const calcularPreco= require('./services/calcularPreco')();
const bodyParser = require('body-parser');
// create application/json parser
const jsonParser = bodyParser.json();

module.exports = app => {
    app.get('/Ingredientes', (req, res) => {
        const ingredientes = getIngredientes();
        res.send(ingredientes);
    })

    app.get('/Ingredientes/:idIngrediente', (req, res) => {
        const {idIngrediente = null} = req.params;
        res.send(getIngredientes(idIngrediente));
    })

    app.get('/Cardapio', (req, res) => {
        res.send(getCardapio());
    })

    app.get('/Cardapio/:idLanche', (req, res) => {
        const {idLanche = null} = req.params;
        res.send(getCardapio(idLanche))
    })

    app.post('/Pedido', jsonParser, async function (req, res) {
        if (!req.body) return res.sendStatus(400);

        const preco = calcularPreco(req.body.ingredientes);

        res.status(200).send(200, preco);
    })
}
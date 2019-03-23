const getIngredientes = require('./services/getIngredientes')();
const getCardapio= require('./services/getCardapio')();

module.exports = app => {
    app.get('/Ingredientes', (req, res) => {
        res.send(getIngredientes());
    })

    app.get('/Ingredientes/:idIngrediente', (req, res) => {
        const {idIngrediente = null} = req.params;
        res.send(getIngredientes(idIngrediente));
    })

    app.get('/Lanches', (req, res) => {
        res.send(getCardapio());
    })

    app.get('/Lanches/:idLanche', (req, res) => {
        const {idLanche = null} = req.params;
        res.send(getCardapio(idLanche))
    })
}
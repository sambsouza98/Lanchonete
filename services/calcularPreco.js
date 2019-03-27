/*
* Função que recebe um array de ids de ingredientes que compoem o pedido do cliente, aplica as devidas promocoes e retorna o preco do lanche.
* */

const {isLight, muitoQueijo, muitaCarne} = require('../promocoes');
const getIngredientes = require('../services/getIngredientes')();
const {QUEIJO, HAMBURGUER} = require('../enums/ingredientes');

module.exports = () => {
    function calcularPreco(idsIngredientes){
        let qtdeQueijosGratis = 0;
        let qtdeCarneGratis = 0;
        let light = false;
        let ingredientes = getIngredientes();
        let lanche = {};
        let preco = 0.00;

        // Reduce para transformar o array de ingredientes em um objeto onde as chaves são os ids dos ingredientes e os valores
        //  sao um objeto com as informacoes do ingrediente;
        lanche = ingredientes.reduce((obj, ing) => {
            return {
                ...obj,
                [ing.id]: {
                    ...ing
                }
            }
        }, {});

        // Analise das promocoes
        qtdeCarneGratis = muitaCarne(idsIngredientes);
        qtdeQueijosGratis = muitoQueijo(idsIngredientes);
        light = isLight(idsIngredientes);

        // Inclusao das quantidades de ingredientes no objeto lanche
        idsIngredientes.forEach(id => {
            let qtde = lanche[id].qtde ? lanche[id].qtde + 1 : 1;
            lanche[id] = {
                ...lanche[id],
                qtde
            }
        })

        // aplicacao das promocoes de qtde grátis
        if(lanche[QUEIJO].qtde)
            lanche[QUEIJO].qtde = lanche[QUEIJO].qtde - qtdeQueijosGratis;
        if(lanche[HAMBURGUER].qtde)
            lanche[HAMBURGUER].qtde = lanche[HAMBURGUER].qtde - qtdeCarneGratis;

        // Calculo do preco do lanche de acordo com as quantidades válidas
        preco = Object.values(lanche).reduce((preco, ingrediente) => {
            return preco + (ingrediente.qtde ? ingrediente.qtde*ingrediente.valor : 0.00);
        }, 0.00);

        // Aplicacao da promocao isLight se for válido
        if(light)
            preco = preco*0.90;

        // Transformacao do retorno de preco para 2 casas decimais
        return parseFloat(preco.toFixed(2));
    }

    return calcularPreco;
}
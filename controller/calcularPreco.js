/*
* Função que recebe um objeto de ingredientes que compoem o pedido do cliente, aplica as devidas promocoes e retorna o preco do lanche.
* */

const {isLight, muitoQueijo, muitaCarne} = require('../promocoes');
const getIngredientes = require('../services/getIngredientes')();
const {QUEIJO, HAMBURGUER} = require('../enums/ingredientes');

module.exports = () => {
    function calcularPreco({ingredientes}){
        let qtdeQueijosGratis = 0;
        let qtdeCarneGratis = 0;
        let light = false;
        let listaIngredientes = getIngredientes();
        let lanche = {};
        let preco = 0.00;

        // Analise das promocoes
        qtdeCarneGratis = muitaCarne(ingredientes);
        qtdeQueijosGratis = muitoQueijo(ingredientes);
        light = isLight(ingredientes);

        // aplicacao das promocoes de qtde grátis
        ingredientes[HAMBURGUER].quantidade = ingredientes[HAMBURGUER].quantidade - qtdeCarneGratis;
        ingredientes[QUEIJO].quantidade = ingredientes[QUEIJO].quantidade - qtdeQueijosGratis;

        // Calculo do preco do lanche de acordo com as quantidades válidas
        preco = Object.keys(listaIngredientes).reduce((preco, ingrediente) => {
            return preco + (ingredientes[ingrediente].quantidade*listaIngredientes[ingrediente].valor);
        }, 0.00);

        // Aplicacao da promocao isLight se for válido
        if(light)
            preco = preco*0.90;

        // Transformacao do retorno de preco para 2 casas decimais
        return parseFloat(preco.toFixed(2));
    }

    return calcularPreco;
}
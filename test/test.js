const assert = require('assert');
const {isLight, muitoQueijo, muitaCarne} = require('../promocoes');
const calcularPreco = require('../services/calcularPreco')();
const {ALFACE, BACON, OVO, QUEIJO, HAMBURGUER} = require('../enums/ingredientes');
const {XBACON, XBURGUER, XEGG, XEGGBACON, XBURGUERSALADA, XBURGUER3QUEIJOS, XBURGUER3, XBURGUER3QUEIJOSSALADA, XBURGUER3CARNESSALADA, XBURGUER3CARNES3QUEIJOS, XBURGUER3CARNES3QUEIJOSSALADA} = require('../enums/lanches');

describe("Teste da funcao de promocao isLight",function(){
    it('Teste da funcao com alface', function(){
        const lanche = [ALFACE];
        assert.equal(isLight(lanche), true);
    });

    it('Teste da funcao com bacon', function(){
        const lanche = [BACON];
        assert.equal(isLight(lanche), false);
    });

    it('Teste da funcao com alface e bacon', function(){
        const lanche = [ALFACE, BACON, HAMBURGUER, OVO, QUEIJO];
        assert.equal(isLight(lanche), false);
    });

    it('Teste da funcao sem alface e sem bacon', function(){
        const lanche = [HAMBURGUER, OVO, QUEIJO];
        assert.equal(isLight(lanche), false);
    })
});

describe("Teste da funcao de promocao muitoQueijo", function(){
    it('Teste da funcao com nenhum queijo', function(){
        const lanche = [ALFACE,BACON,HAMBURGUER,OVO];
        assert.equal(muitoQueijo(lanche), 0);
    });

    it('Teste da funcao com um queijo', function(){
        const lanche = [ALFACE, BACON, HAMBURGUER, OVO, QUEIJO];
        assert.equal(muitoQueijo(lanche), 0);
    });

    it('Teste da funcao com dois queijos', function(){
        const lanche = [ALFACE, BACON, HAMBURGUER, OVO, QUEIJO, QUEIJO];
        assert.equal(muitoQueijo(lanche), 0);
    });

    it('Teste da funcao com tres queijos', function(){
        const lanche = [ALFACE, BACON, HAMBURGUER, OVO, QUEIJO, QUEIJO, QUEIJO];
        assert.equal(muitoQueijo(lanche), 1);
    });

    it('Teste da funcao com quatro queijos', function(){
        const lanche = [ALFACE, BACON, HAMBURGUER, OVO, QUEIJO, QUEIJO, QUEIJO, QUEIJO];
        assert.equal(muitoQueijo(lanche), 1);
    });

    it('Teste da funcao com seis queijos', function (){
        const lanche = [ALFACE, BACON, HAMBURGUER, OVO, QUEIJO, QUEIJO, QUEIJO, QUEIJO, QUEIJO, QUEIJO];
        assert.equal(muitoQueijo(lanche), 2);
    })
})

describe("Teste da funcao de promocao muitaCarne", function(){
    it('Teste da funcao com nenhuma carne', function(){
        const lanche = [ALFACE,BACON,HAMBURGUER,OVO];
        assert.equal(muitaCarne(lanche), 0);
    });

    it('Teste da funcao com uma carne', function(){
        const lanche = [ALFACE, BACON, HAMBURGUER, OVO, QUEIJO];
        assert.equal(muitaCarne(lanche), 0);
    });

    it('Teste da funcao com duas carnes', function(){
        const lanche = [ALFACE, BACON, HAMBURGUER, HAMBURGUER, OVO, QUEIJO];
        assert.equal(muitaCarne(lanche), 0);
    });

    it('Teste da funcao com tres carnes', function(){
        const lanche = [ALFACE, BACON, HAMBURGUER, HAMBURGUER, HAMBURGUER, OVO, QUEIJO];
        assert.equal(muitaCarne(lanche), 1);
    });

    it('Teste da funcao com quatro carnes', function(){
        const lanche = [ALFACE, BACON, HAMBURGUER, HAMBURGUER, HAMBURGUER, HAMBURGUER, OVO, QUEIJO];
        assert.equal(muitaCarne(lanche), 1);
    });

    it('Teste da funcao com seis carnes', function (){
        const lanche = [ALFACE, BACON, HAMBURGUER, HAMBURGUER, HAMBURGUER, HAMBURGUER, HAMBURGUER, HAMBURGUER, OVO, QUEIJO];
        assert.equal(muitaCarne(lanche), 2);
    })
});

describe("Teste da funcao que calcularPreco", function (){
    it('Teste da funcao para um x-bacon', function () {
        assert.equal(calcularPreco(XBACON), 6.50);
    });

    it('Teste da funcao para um x-burguer', function () {
        assert.equal(calcularPreco(XBURGUER), 4.50);
    });

    it('Teste da funcao para um x-egg', function () {
        assert.equal(calcularPreco(XEGG), 5.30);
    });

    it('Teste da funcao para um x-egg-bacon', function () {
        assert.equal(calcularPreco(XEGGBACON), 7.30);
    });

    it('Teste da funcao para um x-burguer-salada (light)', function (){
        assert.equal(calcularPreco(XBURGUERSALADA), 4.41);
    });

    it('Teste da funcao para um x-burguer-3queijos (muitoQueijo)', function () {
        assert.equal(calcularPreco(XBURGUER3QUEIJOS), 6.00);
    });

    it('Teste da funcao para um x-burguer-3 (muitaCarne)', function (){
        assert.equal(calcularPreco(XBURGUER3), 7.50);
    })

    it('Teste da funcao para um x-burguer-3queijos-alface (muitoQueijo e light)', function (){
        assert.equal(calcularPreco(XBURGUER3QUEIJOSSALADA), 5.76);
    })

    it('Teste da funcao para um x-burguer-3carnes-alface (muitaCarne e light)', function (){
        assert.equal(calcularPreco(XBURGUER3CARNESSALADA), 7.11);
    });

    it('Teste da funcao para um x-burguer-3carnes-3queijos (muitaCarne e muitoQueijo)', function (){
        assert.equal(calcularPreco(XBURGUER3CARNES3QUEIJOS), 9.00);
    })

    it('Teste da funcao para um x-burguer-3carnes-3queijos-salada (muitaCarne, muitoQueijo e light)', function (){
        assert.equal(calcularPreco(XBURGUER3CARNES3QUEIJOSSALADA), 8.46)
    })
});

describe('Teste das APIs', function (){
    it('Teste da rota getIngredientes', function (){

    })
})
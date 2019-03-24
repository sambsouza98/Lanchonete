const assert = require('assert');
const {isLight, muitoQueijo, muitaCarne} = require('../promocoes');
const {ALFACE, BACON, OVO, QUEIJO, HAMBURGUER} = require('../enums/ingredientes');

describe("Teste da funcao de promocao isLight",function(){
    it('Teste da funcao com alface', function(){
        const lanche = [ALFACE];
        assert.equal(isLight(lanche), true);
    })

    it('Teste da funcao com bacon', function(){
        const lanche = [BACON];
        assert.equal(isLight(lanche), false);
    })

    it('Teste da funcao com alface e bacon', function(){
        const lanche = [ALFACE, BACON, HAMBURGUER, OVO, QUEIJO];
        assert.equal(isLight(lanche), false);
    })

    it('Teste da funcao sem alface e sem bacon', function(){
        const lanche = [HAMBURGUER, OVO, QUEIJO];
        assert.equal(isLight(lanche), false);
    })
});

describe("Teste da funcao de promocao muitoQueijo", function(){
    it('Teste da funcao com nenhum queijo', function(){
        const lanche = [ALFACE,BACON,HAMBURGUER,4];
        assert.equal(muitoQueijo(lanche), 0);
    });

    it('Teste da funcao com um queijo', function(){
        const lanche = [ALFACE, BACON, HAMBURGUER, OVO, QUEIJO];
        assert.equal(muitoQueijo(lanche), 0);
    })

    it('Teste da funcao com dois queijos', function(){
        const lanche = [ALFACE, BACON, HAMBURGUER, OVO, QUEIJO, QUEIJO];
        assert.equal(muitoQueijo(lanche), 0);
    })

    it('Teste da funcao com tres queijos', function(){
        const lanche = [ALFACE, BACON, HAMBURGUER, OVO, QUEIJO, QUEIJO, QUEIJO];
        assert.equal(muitoQueijo(lanche), 1);
    })

    it('Teste da funcao com quatro queijos', function(){
        const lanche = [ALFACE, BACON, HAMBURGUER, OVO, QUEIJO, QUEIJO, QUEIJO, QUEIJO];
        assert.equal(muitoQueijo(lanche), 1);
    })

    it('Teste da funcao com seis queijos', function (){
        const lanche = [ALFACE, BACON, HAMBURGUER, OVO, QUEIJO, QUEIJO, QUEIJO, QUEIJO, QUEIJO, QUEIJO];
        assert.equal(muitoQueijo(lanche), 2);
    })
})

describe("Teste da funcao de promocao muitaCarne", function(){
    it('Teste da funcao com nenhuma carne', function(){
        const lanche = [ALFACE,BACON,HAMBURGUER,4];
        assert.equal(muitaCarne(lanche), 0);
    });

    it('Teste da funcao com uma carne', function(){
        const lanche = [ALFACE, BACON, HAMBURGUER, OVO, QUEIJO];
        assert.equal(muitaCarne(lanche), 0);
    })

    it('Teste da funcao com duas carnes', function(){
        const lanche = [ALFACE, BACON, HAMBURGUER, HAMBURGUER, OVO, QUEIJO];
        assert.equal(muitaCarne(lanche), 0);
    })

    it('Teste da funcao com tres carnes', function(){
        const lanche = [ALFACE, BACON, HAMBURGUER, HAMBURGUER, HAMBURGUER, OVO, QUEIJO];
        assert.equal(muitaCarne(lanche), 1);
    })

    it('Teste da funcao com quatro carnes', function(){
        const lanche = [ALFACE, BACON, HAMBURGUER, HAMBURGUER, HAMBURGUER, HAMBURGUER, OVO, QUEIJO];
        assert.equal(muitaCarne(lanche), 1);
    })

    it('Teste da funcao com seis carnes', function (){
        const lanche = [ALFACE, BACON, HAMBURGUER, HAMBURGUER, HAMBURGUER, HAMBURGUER, HAMBURGUER, HAMBURGUER, OVO, QUEIJO];
        assert.equal(muitaCarne(lanche), 2);
    })
});
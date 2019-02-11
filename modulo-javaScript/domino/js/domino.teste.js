test("peca 6/5 encaixa com peca 5/1", assert => {
    const pecaA = new Peca(6, 5)
    const pecaB = new Peca(5, 1)

    assert.isTrue(pecaA.podeEncaixar(pecaB))
})

test("peca 1/1 não encaixa com 2/4", assert => {
    const pecaA = new Peca(1, 1)
    const pecaB = new Peca(2, 4)

    assert.isFalse(pecaA.podeEncaixar(pecaB))
})

test("criar peça 7/1 resulta em erro.", assert =>{
    assert.throwsWithMessage(Error, `O número máximo de valor para cada lado é ${Peca.VALOR_MAXIMO}.` , () => {
        const peca = new Peca(7, 1)
    })
})

test("criar peça -1/4 resulta em erro.", assert =>{
    assert.throwsWithMessage(Error, `O número mínimo de valor para cada lado é ${Peca.VALOR_MINIMO}.` , () => {
        const peca = new Peca(-1, 4)
    })
})
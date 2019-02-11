test('tabuleiro: tabuleiro deve comecar vazio', assert => {
    const tabuleiro = new Tabuleiro();

    assert.equals(0, tabuleiro.pecasDoTabuleiro.length);
});

test('adicionar a primeira peca define os valores', assert => {
    const tabuleiro = new Tabuleiro();
    const peca = new Peca(1, 4);

    tabuleiro.adicionarPecaAoOeste(peca);

    assert.equals(1, tabuleiro.valorOeste);
    assert.equals(4, tabuleiro.valorLeste);
});

test('tabuleiro: adicionar peça invalida ao leste causa erro', assert => {
    assert.throws(JogadaInvalidaError, () => {
        const tabuleiro = new Tabuleiro();
        const pecaInicial = new Peca(1, 6);
        const pecaInvalida = new Peca(1, 2);

        tabuleiro.adicionarPecaAoOeste(pecaInicial);
        tabuleiro.adicionarPecaAoLeste(pecaInvalida);
    });
});

test('tabuleiro: adicionar peça invalida ao oeste causa erro', assert => {
    assert.throws(JogadaInvalidaError, () => {
        const tabuleiro = new Tabuleiro();
        const  pecaInicial = new Peca(6, 1);
        const  pecaInvalida = new Peca(1, 2);

        tabuleiro.adicionarPecaAoOeste(pecaInicial);
        tabuleiro.adicionarPecaAoOeste(pecaInvalida);
    });
});

test('tabuleiro: adicionar peça ao oeste é valido', assert => {
    const tabuleiro = new Tabuleiro();
    const pecaInicial = new Peca(2, 4);
    const pecaSecundaria = new Peca(1, 2);

    tabuleiro.adicionarPecaAoLeste(pecaInicial);
    tabuleiro.adicionarPecaAoOeste(pecaSecundaria);

    assert.equals(1, tabuleiro.valorOeste);
    assert.equals(4, tabuleiro.valorLeste);
});

test('tabuleiro: adicionar peça ao leste valida', assert => {
    const tabuleiro = new Tabuleiro();
    const pecaInicial = new Peca(2, 4);
    const pecaSecundaria = new Peca(4, 6);

    tabuleiro.adicionarPecaAoLeste(pecaInicial);
    tabuleiro.adicionarPecaAoLeste(pecaSecundaria);

    assert.equals(2, tabuleiro.valorOeste);
    assert.equals(6, tabuleiro.valorLeste);
});

test('tabuleiro: mesma peca não pode ser adicionada', assert => {
    assert.throws(JogadaInvalidaError, () => {
        const tabuleiro = new Tabuleiro();
        const peca = new Peca(1, 1);

        tabuleiro.adicionarPecaAoOeste(peca);
        tabuleiro.adicionarPecaAoOeste(peca);
    });
});
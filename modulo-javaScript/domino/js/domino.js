class Peca {

    constructor(valorOeste, valorLeste) {

        this.valorOeste = this.pecaEhValida(valorOeste)
        this.valorLeste = this.pecaEhValida(valorLeste)
    }

    static get VALOR_MAXIMO() {
        return 6;
    }

    static get VALOR_MINIMO() {
        return 0;
    }

    pecaEhValida(valor) {
        if ((valor >= 0) && (valor <= 6)) {
            return valor
        }
        else if (valor > 6) {
            throw new JogadaInvalidaError(`O número máximo de valor para cada lado é ${Peca.VALOR_MAXIMO}.`)
        }
        else if (valor < 0) {
            throw new JogadaInvalidaError(`O número mínimo de valor para cada lado é ${Peca.VALOR_MINIMO}.`)
        }
    }

    podeEncaixar(peca) {
        if (this.valorOeste === peca.valorLeste) {
            return true
        }
        if (this.valorLeste === peca.valorOeste) {
            return true
        } else return false
    }
}

class JogadaInvalidaError extends Error {
    constructor(mensagem) {
        super(mensagem)
    }

}

class Tabuleiro {

    constructor() {
        this.pecasDoTabuleiro = []
        this.valorOeste = 0
        this.valorLeste = 0
    }

    adicionarPecaAoLeste(peca) {

        if (this.pecasDoTabuleiro.length === 0) {

            this.pecasDoTabuleiro.push(peca)
            this.valorOeste = peca.valorOeste
            this.valorLeste = peca.valorLeste
            return
        }
        if(this.pecasDoTabuleiro.indexOf(peca) < 0){
            if (peca.podeEncaixar(this.pecasDoTabuleiro[this.pecasDoTabuleiro.length - 1])) {
                this.pecasDoTabuleiro.push(peca)
                this.valorLeste = peca.valorLeste
                return
            }
            else {
                throw new JogadaInvalidaError("tabuleiro: adicionar peça invalida ao leste causa erro")
            }
            }
            else {
                throw new JogadaInvalidaError("tabuleiro: adicionar peça invalida ao leste causa erro")
            }      
    }

    adicionarPecaAoOeste(peca) {
        if (this.pecasDoTabuleiro.length === 0) {
            this.valorOeste = peca.valorOeste
            this.valorLeste = peca.valorLeste
            this.pecasDoTabuleiro[0] = peca
        }
        else {
            if(this.pecasDoTabuleiro.indexOf(peca) < 0){
                if (peca.podeEncaixar(this.pecasDoTabuleiro[0])) {
                    if (this.pecasDoTabuleiro[0].valorOeste === peca.valorOeste) {
                        this.valorOeste = peca.valorLeste
                        this.valorLeste = this.pecasDoTabuleiro[this.pecasDoTabuleiro.length - 1].valorLeste
                        this.pecasDoTabuleiro.unshift(peca)
                    }
                    if (this.pecasDoTabuleiro[0].valorOeste === peca.valorLeste) {
                        this.valorOeste = peca.valorOeste
                        this.valorLeste = this.pecasDoTabuleiro[this.pecasDoTabuleiro.length - 1].valorLeste
                        this.pecasDoTabuleiro.unshift(peca)
                    }
                }
            }

            else {
                throw new JogadaInvalidaError("tabuleiro: adicionar peça invalida ao oeste causa erro")
            }
        }
        if (peca.valorLeste == this.pecasDoTabuleiro[0].valorOeste || peca.valorOeste == this.pecasDoTabuleiro[0].valorOeste) {

        }
        else {
            throw new JogadaInvalidaError("tabuleiro: adicionar peça invalida ao oeste causa erro")
        }

    }
}



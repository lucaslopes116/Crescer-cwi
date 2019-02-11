import React, { Component, Fragment } from 'react';
import './CardBotao.css'

class CardBotao extends Component {
    render() {
        return (
            <Fragment>
                <button className="like">
                    <img src="../img/Vectorlike1.png" class="img-like-1" alt="parte do like"/>
                    <img src="img/Vectorlike2.png" class="img-like-2" alt="parte do like"/>
                    <span class="texto-botao">Gostar</span>
                </button>
                <button className="compartilha">
                    <img src="img/Vectorseta.png" alt="seta do compartilhar"/>
                    <span className="texto-botao">Compartilhar</span>
                </button>
            </Fragment>
        );
    }
}

export default CardBotao;
import React, { Component, Fragment } from 'react';
import './BotaoNovaPostagem.css'

class BotaoNovaPostagem extends Component {
    render() {
        return (
            <Fragment>
                <button className="carrega--novaPostagem" id="postagem" onClick={this.criarPost} type={this.props.tipoType}>{this.props.InfoBotao}</button>
            </Fragment>
        );
    }
}

export default BotaoNovaPostagem;
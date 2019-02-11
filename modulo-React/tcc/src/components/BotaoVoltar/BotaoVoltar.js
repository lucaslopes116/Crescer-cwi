import React, { Component, Fragment } from 'react';
import './BotaoVoltar.css'

class BotaoVoltar extends Component {
    render() {
        return (
            <Fragment>
                <button className="Voltar" type={this.props.tipoType} onClick={this.props.onClick}>{this.props.InfoBotao}</button>
            </Fragment>
        );
    }
}

export default BotaoVoltar;
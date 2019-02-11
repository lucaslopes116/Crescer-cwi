import React, { Component, Fragment } from 'react';
import './BotaIrRegistro.css'

class BotaoIrRegistro extends Component {
    render() {
        return (
            <Fragment>
                <button className="irRegistro" type={this.props.tipoType} onClick={this.props.onClick}>{this.props.InfoBotao}</button>
            </Fragment>
        );
    }
}

export default BotaoIrRegistro;



import React, { Component, Fragment } from 'react';
import './BotaoPerfil.css'

class BotaoPerfil extends Component {
    render() {
        return (
            <Fragment>
                <button className="carrega--perfil" type={this.props.tipoType} onClick={this.props.onClick}>{this.props.InfoBotao}</button>
            </Fragment>
        );
    }
}

export default BotaoPerfil;
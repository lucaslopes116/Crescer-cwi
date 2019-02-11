import React, { Component, Fragment } from 'react';
import './BotaoPadrao.css'

class BotaoPadrao extends Component {
    render() {
        return (
            <Fragment>
                <button className="carrega" type={this.props.tipoType}>{this.props.InfoBotao}</button>
            </Fragment>
        );
    }
}

export default BotaoPadrao;
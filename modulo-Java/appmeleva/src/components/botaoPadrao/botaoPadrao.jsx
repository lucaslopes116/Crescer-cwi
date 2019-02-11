import React, { Component, Fragment } from 'react';
import './botaoPadrao.css'

class BotaoPadrao extends Component {
    render() {
        return (
            <Fragment>
                <button className="carrega" onClick={this.props.onClick}>{this.props.InfoBotao}</button>
            </Fragment>
        );
    }
}

export default BotaoPadrao;
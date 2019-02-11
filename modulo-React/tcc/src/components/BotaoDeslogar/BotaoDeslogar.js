import React, { Component, Fragment } from 'react';
import './BotaoDeslogar.css'

class BotaoDeslogar extends Component {
    render() {
        return (
            <Fragment>
                <button className="desloga" type={this.props.tipoType} onClick={this.props.onClick}>{this.props.InfoBotao}</button>
            </Fragment>
        );
    }
}

export default BotaoDeslogar;



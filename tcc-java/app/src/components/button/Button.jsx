import React, { Component,Fragment } from 'react';
import './button.css'

class Button extends Component {
    render() {
        return (
            <Fragment>
                <button className={this.props.className} onClick={this.props.onClick}>{this.props.nome}</button>
            </Fragment>
        );
    }
}

export default Button;
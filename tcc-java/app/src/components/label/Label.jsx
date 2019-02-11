import React, { Component, Fragment } from 'react';
import './label.css'

class Label extends Component {
    render() {
        return (
            <Fragment>
                <label className={this.props.className}>{this.props.nome}</label>
            </Fragment>
        );
    }
}

export default Label;
import React, { Component, Fragment } from 'react';
import './input.css'

class InputSemRequired extends Component {
    render() {
        return (
            <Fragment>
                <input type={this.props.type} className={this.props.className} required
                 value={this.props.value} name={this.props.name} placeholder={this.props.placeholder} onChange={this.props.onChange}>{this.props.nome}</input>
            </Fragment>
        );
    }
}

export default InputSemRequired;
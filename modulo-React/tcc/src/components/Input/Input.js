import React, { Component, Fragment } from 'react';



class Input extends Component {
    render() {
        return (
            <Fragment>
                <Input className='Input' type={this.props.tipo} name={this.props.name}>{this.props.inputText}</Input>
            </Fragment>
        );
    }
}

export default Input;
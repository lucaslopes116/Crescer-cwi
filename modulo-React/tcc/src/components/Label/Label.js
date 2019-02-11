import React, { Component, Fragment } from 'react';



class Label extends Component {
    render() {
        return (
            <Fragment>
                <label className='label'>{this.props.texto}</label>
            </Fragment>
        );
    }
}

export default Label;
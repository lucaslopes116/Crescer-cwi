import React, { Component, Fragment } from 'react';
import './form.css'

class Form extends Component {
    render() {
        return (
            <Fragment>
                <form onSubmit={this.props.onSubmit} className={this.props.className} autocomplete="off" >
                    {this.props.children}
                </form>
            </Fragment>
        );
    }
}

export default Form;
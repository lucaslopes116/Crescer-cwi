import React, { Component,Fragment } from 'react';
import ImgHome from './../../img/home.jpg'
import './DivPadrao.css'

class DivPadrao extends Component {
    render() {
        return (
            <Fragment>
                <div className={this.props.className}>
                    <h1>APP TESTE</h1>
                    <img className="img--home" src={ImgHome}/>
                </div>
            </Fragment>
        );
    }
}

export default DivPadrao;